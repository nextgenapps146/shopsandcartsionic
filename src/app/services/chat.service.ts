import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ChatService {

    chatsRef: AngularFirestoreCollection<ChatMessages>;
    chatContactsRef: AngularFirestoreCollection<ChatContacts>;

    constructor(
        public Afs: AngularFirestore
        ) { }

    public async getChatUsers(userId) {
        this.chatContactsRef = this.Afs.collection<ChatContacts>('chatcontacts',
            ref => ref.where('customerid', '==', userId));
        return this.chatContactsRef.snapshotChanges().pipe(
            map(res => res.map((dataItems) => {
                const data = dataItems.payload.doc.data() as ChatContacts,
                id = dataItems.payload.doc.id;
                return { ...data, chatcontactid: id };
            }))
        );
    }

    public async getChatMessages(chatcontactid) {
        this.chatsRef = this.Afs.collection<ChatMessages>('chatmessages',
            ref => ref.where('chatcontactid', '==', chatcontactid));
        return this.chatsRef.snapshotChanges().pipe(
            map(res => res.map(dataItems => {
                const data: any = dataItems.payload.doc.data() as ChatMessages,
                id = dataItems.payload.doc.id;
                return { ...data, id };
            }))
        );
    }

    // Not Sure What this is for
    // public async addChatPushMessage(record) {
    //     this.addressCollectionRefrence = this.Afs.collection('chatnotificaions');
    //     await this.addressCollectionRefrence.add(record);
    // }

    public async addChatPushMessage(record) {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        xhr.open('POST', 'https://us-central1-bansik-7c7c4.cloudfunctions.net/function-1');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(record));
    }

    public async sendNotificaion(record) {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        xhr.open('POST', 'https://us-central1-bansik-7c7c4.cloudfunctions.net/function-1');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(record));
    }

    public async addChatMessage(record, userId) {
        record.senderid = userId;
        record.messagetime = new Date().getTime();
        record.readby = [userId];

        this.chatsRef = this.Afs.collection('chatmessages');
        await this.chatsRef.add(record);

        this.chatContactsRef = this.Afs.collection<ChatContacts>('chatcontacts');
        await this.chatContactsRef.doc(record.chatcontactid)
            .update({ lastmessage: record.message, lastmessagetime: record.messagetime });
    }

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

    public async  addChatContacts(record) {
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
