import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
    providedIn: 'root'
})

export class ChatService {

    chatsRef: AngularFirestoreCollection<ChatMessages>;
    chatContactsRef: AngularFirestoreCollection<ChatContacts>;

    savedThreads = [];
    savedUserChats: any;

    constructor(
        public Afs: AngularFirestore,
        private utils: UtilsService
    ) { }

    public async getChatThreads(userId) {
        this.chatsRef = this.Afs.collection('chatmessages',
            ref => ref.where('users', 'array-contains', userId));
        return this.chatsRef.snapshotChanges().pipe(
            map(res => res.map((dataItems) => {
                const data = dataItems.payload.doc.data(),
                id = dataItems.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    public async getChatMessages(threadId) {
        this.chatsRef = this.Afs.collection('chatmessages');
        return this.chatsRef.doc(threadId).snapshotChanges().pipe(
            map((res: any) => {
                if (res.payload.exists) {
                    const result = res.payload.data();
                    if (result) {
                        result.id = res.payload.id;
                        return result;
                    }
                } else {
                    return res.payload.exists;
                }
            })
        );
    }

    public getChatsFromStorage(userId) {
        return JSON.parse(localStorage.getItem(userId + '-chats'));
    }

    public getChatThreadsFromStorage(userId) {
        return JSON.parse(localStorage.getItem(userId + '-threads'));
    }

    public updateSavedThreads(userId, threadId) {
        if (this.savedThreads) {
            const index = this.savedThreads.indexOf(threadId);
            if (index > -1) {
                this.savedThreads.splice(index, 1);
                this.savedThreads.unshift(threadId);
            } else {
                this.savedThreads.unshift(threadId);
            }
        } else {
            this.savedThreads = [threadId];
        }
        localStorage.setItem(userId + '-threads', JSON.stringify(this.savedThreads));
    }

    public addServerChatToSavedChat(serverThread) {
        if (!this.savedUserChats[serverThread.id]) {
            this.savedUserChats[serverThread.id] = serverThread;
        } else {
            const savedThreadChats = this.savedUserChats[serverThread.id],
            threadKeys = Object.keys(serverThread);
            if (threadKeys && threadKeys.length > 0 &&
                savedThreadChats.lastmessagetime !== serverThread.lastmessagetime) {
                threadKeys.forEach(key => {
                    if (key === 'messages' && serverThread[key].length > 0) {
                        const serverMessages = this.getUniqueMessages(serverThread[key], savedThreadChats[key]);
                        serverMessages.forEach(item => {
                            if (item.datetime !== savedThreadChats[key][0].datetime) {
                                savedThreadChats[key].push(item);
                            }
                        });
                    } else {
                        savedThreadChats[key] = serverThread[key];
                    }
                });
            }
            this.savedUserChats[serverThread.id] = savedThreadChats;
        }

        this.addContactToSavedChats(serverThread.id);
        this.addChatsToStorage(this.utils.userInfo.id, this.savedUserChats);
    }

    getUniqueMessages(serverMessages, savedMessages) {
        const sLen = serverMessages.length;
        savedMessages = savedMessages.slice(0, sLen);

        // Find values that are in serverMessages but not in savedMessages
        const uniqueMessages = serverMessages.filter(obj1 => {
            return !savedMessages.some(obj2 => {
                return obj1.datetime === obj2.datetime;
            });
        });

        return uniqueMessages;
    }

    addContactToSavedChats(threadId) {
        const thread = this.savedUserChats[threadId];
        if (!thread.contact) {
            let contact = thread.sender;
            if (thread.sender.id === this.utils.userInfo.id) {
                contact = thread.recipient;
            }
            this.savedUserChats[threadId].contact = contact;

            // removing users, sender, recipient, read, id ---
            // because we dont need them
            const deleteOptions = ['users', 'sender', 'recipient', 'id'];
            deleteOptions.forEach(key => {
                delete this.savedUserChats[threadId][key];
            });
        }
    }

    addChatsToStorage(userId, params) {
        localStorage.setItem(userId + '-chats', JSON.stringify(params));
    }

    public async addNewChatRecord(threadId, params) {
        this.chatsRef = this.Afs.collection('chatmessages');
        // await this.utils.openLoader();
        await this.chatsRef.doc(threadId).set(params);
        // await this.utils.closeLoading();
    }

    public async addNewMessageToChatRecord(threadId, message) {
        this.chatsRef = this.Afs.collection('chatmessages');
        const read = [message.senderid];
        await this.utils.openLoader();
        await this.chatsRef.doc(threadId)
            .update({ read, lastmessagetime: message.datetime, messages: firebase.firestore.FieldValue.arrayUnion(message) })
            .then(snapshot => {
                console.log(snapshot);
            });
        await this.utils.closeLoading();
    }

    public deleteRecord(threadId) {
        this.chatsRef = this.Afs.collection('chatmessages');
        this.chatsRef.doc(threadId).delete().then(() => {
            console.log('Document successfully deleted!');
        }).catch(error => {
            // log it for admin purpose
            console.error('Error removing document: ', error);
        });
    }

    // Not Sure What this is for
    // public async addChatPushMessage(record) {
    //     this.addressCollectionRefrence = this.Afs.collection('chatnotificaions');
    //     await this.addressCollectionRefrence.add(record);
    // }

    // public async addChatPushMessage(record) {
    //     const xhr = new XMLHttpRequest();
    //     xhr.addEventListener('readystatechange', function () {
    //         if (this.readyState === 4) {
    //             console.log(this.responseText);
    //         }
    //     });
    //     xhr.open('POST', 'https://us-central1-bansik-7c7c4.cloudfunctions.net/function-1');
    //     xhr.setRequestHeader('Content-Type', 'application/json');
    //     xhr.send(JSON.stringify(record));
    // }

    // public async sendNotificaion(record) {
    //     const xhr = new XMLHttpRequest();
    //     xhr.addEventListener('readystatechange', function () {
    //         if (this.readyState === 4) {
    //             console.log(this.responseText);
    //         }
    //     });
    //     xhr.open('POST', 'https://us-central1-bansik-7c7c4.cloudfunctions.net/function-1');
    //     xhr.setRequestHeader('Content-Type', 'application/json');
    //     xhr.send(JSON.stringify(record));
    // }

    public async loadChatContactDetails(chatcontactid) {
        this.chatContactsRef = this.Afs.collection<ChatContacts>('chatcontacts');
        return this.chatContactsRef.doc(chatcontactid).snapshotChanges().pipe(
            map((res: any) => {
                const result = res.payload.data() as ChatContacts;
                result.id = res.payload.id;
                return result;
            })
        );
    }

    public async checkChatContacts(userId, storeId) {
        this.chatContactsRef = this.Afs.collection<ChatContacts>('chatcontacts',
            ref => ref.where('customerid', '==', userId).where('sellerid', '==', storeId));
        return this.chatContactsRef
            .snapshotChanges().pipe(
                map(res => res.map(dataItems => {
                    const data: any = dataItems.payload.doc.data() as ChatContacts;
                    const id = dataItems.payload.doc.id;
                    return { ...data, chatcontactid: id };
                }))
            );
    }

    public async addChatContacts(record) {
        this.chatContactsRef = this.Afs.collection('chatcontacts');
        await this.chatContactsRef.add(record);
    }

    // public async checkChatContacts(userId, storeId) {
    //     this.chatContactsRef = this.Afs.collection<ChatContacts>('chatcontacts',
    //         ref => ref.where('customerid', '==', userId).where('sellerid', '==', storeId));
    //     return this.chatContactsRef.snapshotChanges().pipe(
    //         map(res => res.map(dataItems => {
    //             const data: any = dataItems.payload.doc.data() as ChatContacts;
    //             const id = dataItems.payload.doc.id;
    //             return { ...data, chatcontactid: id };
    //         }))
    //     );
    // }

}

export interface ChatMessages {
    chatcontactid: string;
    senderid: string;
    message: string;
    messagetime: string;
    readby: any;
}

export interface ChatContacts {
    sellerid: string;
    sellerame: string;
    sellerimage: string;
    customerid: string;
    customername: string;
    customerimage: string;
    lastmessage: string;
    lastmessagetime: string;
    chatcontactid: string;
    id: any;
}
