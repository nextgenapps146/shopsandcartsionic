import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { ChatService } from '../../services/chat.service';

@Component({
    selector: 'app-chatroom',
    templateUrl: './chatroom.page.html',
    styleUrls: ['./chatroom.page.scss'],
})

export class ChatroomPage implements OnInit {

    userInfo: any;
    recipientId: any;
    recipientName: string;
    threadId: any;
    newMessage: string; // user typed message
    messages = [];

    serverChats: any;
    lastMessageSentTime: any;

    isServerThreadExists = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private chatService: ChatService,
        private utils: UtilsService
    ) {
        this.userInfo = this.utils.userInfo;
        this.loadMessages();
    }

    ngOnInit() { }

    loadMessages() {
        this.route.queryParams.subscribe((params) => {
            if (params && params.recipientName && params.recipientId) {
                this.recipientName = params.recipientName;
                this.initialize(params.recipientId);
            }
        });
    }

    initialize(recepientId) {
        this.recipientId = recepientId; // seller
        this.threadId = this.utils.getCombinedChatIds(this.userInfo.id, this.recipientId);
        this.getSavedChats();
        this.getChatMessageFromServer(this.threadId);
        this.messages = this.chatService.savedUserChats[this.threadId] &&
            this.chatService.savedUserChats[this.threadId].messages || [];
    }

    getSavedChats() {
        this.chatService.savedUserChats = this.chatService.getChatsFromStorage(this.userInfo.id) || {};
        this.chatService.savedThreads = this.chatService.getChatThreadsFromStorage(this.userInfo.id);
    }

    getChatMessageFromServer(threadId) {
        this.chatService.getChatMessages(threadId).then((messages) => {
            messages.subscribe((result) => {
                this.combineChats(result);
                this.messages = this.chatService.savedUserChats[this.threadId] &&
                    this.chatService.savedUserChats[this.threadId].messages || [];
                // this.messages = this.chatService.savedUserChats[this.threadId].messages || [];
            });
        });
    }

    combineChats(serverRecord) {
        this.isServerThreadExists = false;
        if (serverRecord) {
            this.isServerThreadExists = true;
            this.lastMessageSentTime = serverRecord.serverRecord;
            if (serverRecord.messages && serverRecord.messages.length > 0) {
                this.chatService.updateSavedThreads(this.userInfo.id, this.threadId);
                this.chatService.addServerChatToSavedChat(serverRecord);
                this.checkDeleteRecord(serverRecord);
            }
        }
        // this.messages = this.savedThreadChats && this.savedThreadChats.messages || [];
    }

    getDefaultNewThreadParams(message) {
        const params: any = {};
        let name = this.userInfo.firstname ? this.userInfo.firstname : '';
        name += this.userInfo.lastname ? ' ' + this.userInfo.lastname : '';
        params.sender = { name: name || 'Anonymous', id: this.userInfo.id };
        params.recipient = { name: this.recipientName, id: this.recipientId };
        params.lastmessagetime = message.datetime || '';
        params.read = [this.userInfo.id];
        params.users = [this.userInfo.id, this.recipientId];
        params.messages = [message];
        return params;
    }

    // This method add a new object into the message array with just the date,
    // so we can differentiate between chat days..
    checkIsNewMessagingDay(date) {
        let newDay = false;
        if (!this.lastMessageSentTime) {
            this.lastMessageSentTime = date;
            newDay = true;
        } else {
            const dateString = date.toLocaleDateString(),
            lastMTime = new Date(this.lastMessageSentTime),
            lastMTimeString = lastMTime.toLocaleDateString();
            if (dateString !== lastMTimeString) {
                newDay = true;
            }
        }
        return newDay;
    }

    // check if we can delete message from server after read
    checkDeleteRecord(results) {
        if (results && results.messages.length > 0) {
            if (results.read && results.read.length > 0 && results.read[0] !== this.userInfo.id) {
                this.chatService.deleteRecord(this.threadId);
                this.chatService.savedUserChats[this.threadId].read = [];
            }
        }
    }

    sendMessage() {
        if (this.newMessage) {
            const date = new Date(),
            datetime = date.toISOString(),
            newDay = this.checkIsNewMessagingDay(date),
            time = this.utils.getDisplayTime(datetime),
            messageParams: any = { time, datetime, message: this.newMessage, senderid: this.userInfo.id };
            if (newDay) {
                messageParams.newChattingDay = date.toDateString();
            }
            this.addNewChatMessage(messageParams);
            this.newMessage = '';
        }
    }

    addNewChatMessage(messageParams) {
        if (!this.isServerThreadExists) {
            // update new record
            const newRecord = this.getDefaultNewThreadParams(messageParams);
            this.chatService.addNewChatRecord(this.threadId, newRecord);
            // this.saveNewChatThreadToStorage(newRecord);
        } else {
            this.chatService.addNewMessageToChatRecord(this.threadId, messageParams);
            // this.saveChatsToStorage(messageParams);
        }
    }
}

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { UtilsService } from '../../services/utils.service';
// import { ChatService } from '../../services/chat.service';

// @Component({
//     selector: 'app-chatroom',
//     templateUrl: './chatroom.page.html',
//     styleUrls: ['./chatroom.page.scss'],
// })

// export class ChatroomPage implements OnInit {

//     userInfo: any;
//     senderId: any;
//     recipientId: any;
//     recipientName: string;
//     threadExists = false;
//     threadId: any;
//     message: string; // user typed message
//     messages = [];

//     // savedThreads = [];
//     savedUserChats: any;
//     savedThreadChats: any;
//     serverChats: any;
//     lastMessageSentTime: any;

//     isServerRecordExists = false;

//     constructor(
//         private route: ActivatedRoute,
//         private router: Router,
//         private chatService: ChatService,
//         private utils: UtilsService
//     ) {
//         this.userInfo = this.utils.userInfo;
//         this.loadMessages();
//     }

//     ngOnInit() { }

//     loadMessages() {
//         this.route.queryParams.subscribe((params) => {
//             if (params && params.recipientName && params.recipientId) {
//                 this.recipientName = params.recipientName;
//                 this.initialize(this.userInfo.id, params.recipientId);
//             }
//         });
//     }

//     initialize(senderId, recepientId) {
//         this.senderId = senderId; // current user
//         this.recipientId = recepientId; // seller
//         this.threadId = this.utils.getCombinedChatIds(this.senderId, this.recipientId);
//         this.getSavedChats(this.threadId);
//         this.getChatMessageFromServer(this.threadId);
//     }

//     getSavedChats(threadId) {
//         this.savedUserChats = this.chatService.getChatsFromStorage(this.senderId) || {};
//         this.savedThreadChats = this.savedUserChats && this.savedUserChats[threadId] ? this.savedUserChats[threadId] : null;
//         this.chatService.savedThreads = this.chatService.getChatThreadsFromStorage(this.senderId);
//     }

//     getChatMessageFromServer(threadId) {
//         this.chatService.getChatMessages(threadId).then((messages) => {
//             messages.subscribe((results) => {
//                 this.serverChats = results;
//                 this.combineChats(this.serverChats);
//             });
//         });
//     }

//     combineChats(serverChats) {
//         this.isServerRecordExists = false;
//         if (serverChats) {
//             this.isServerRecordExists = true;
//             if (serverChats.messages && serverChats.messages.length > 0) {
//                 this.addServerChatsToSavedChats(serverChats);
//                 this.chatService.updateSavedThreads(this.senderId, this.threadId);
//             }
//         }
//         this.messages = this.savedThreadChats && this.savedThreadChats.messages || [];
//     }

//     addServerChatsToSavedChats(serverChats) {
//         if (!this.savedThreadChats) {
//             this.savedThreadChats = serverChats;
//         } else if (this.savedThreadChats.lastmessagetime !== serverChats.lastmessagetime) {
//             this.lastMessageSentTime = serverChats.lastmessagetime;
//             serverChats.messages.forEach(element => {
//                 // element.time = this.getDisplayTime(element.datetime), // i dont think we need this line
//                 this.savedThreadChats.messages.push(element);
//             });

//             this.savedUserChats[this.threadId] = this.savedThreadChats;
//             this.chatService.addChatsToStorage(this.senderId, this.savedUserChats);
//         }
//         this.checkDeleteRecord(serverChats);
//     }

//     sendMessage() {
//         if (this.message) {
//             const date = new Date(),
//             datetime = date.toISOString(),
//             newDay = this.checkIsNewMessagingDay(date),
//             time = this.utils.getDisplayTime(datetime),
//             messageParams: any = { time, datetime, message: this.message, senderid: this.senderId };
//             if (newDay) {
//                 messageParams.newChattingDay = date.toDateString();
//             }
//             this.addNewChatMessage(messageParams);
//             this.message = '';
//         }
//     }

//     addNewChatMessage(messageParams) {
//         if (!this.isServerRecordExists) {
//             // update new record
//             const newRecord = this.getDefaultNewThreadParams(messageParams);
//             this.chatService.addNewChatRecord(this.threadId, newRecord);
//             this.saveNewChatThreadToStorage(newRecord);
//         } else {
//             this.chatService.addNewMessageToChatRecord(this.threadId, messageParams);
//             this.saveChatsToStorage(messageParams);
//         }
//     }

//     saveNewChatThreadToStorage(serverThread) {
//         if (!this.savedThreadChats) {
//             this.savedUserChats[this.threadId] = serverThread;
//             this.savedThreadChats = this.savedUserChats[this.threadId];
//         } else {
//             this.savedThreadChats = this.savedUserChats[serverThread.id];
//             const threadKeys = Object.keys(serverThread);
//             if (threadKeys && threadKeys.length > 0 &&
//                 this.savedThreadChats.lastmessagetime !== serverThread.lastmessagetime) {
//                 threadKeys.forEach(key => {
//                     if (key === 'messages' && serverThread[key].length > 0) {
//                         serverThread[key].forEach(item => {
//                             this.savedThreadChats[key].push(item);
//                         });
//                     } else {
//                         this.savedThreadChats[key] = serverThread[key];
//                     }
//                 });
//             }
//             this.savedUserChats[serverThread.id] = this.savedThreadChats;
//         }

//         this.chatService.addChatsToStorage(this.senderId, this.savedUserChats);
//     }

//     saveChatsToStorage(params) {
//         if (!this.savedThreadChats) {
//             this.savedUserChats[this.threadId] = this.getDefaultNewThreadParams(params);
//             this.savedThreadChats = this.savedUserChats[this.threadId];
//         }
//         this.savedThreadChats.lastmessagetime = params.datetime;
//         this.savedThreadChats.messages.push(params);
//         this.savedThreadChats.read = [this.senderId];

//         this.savedUserChats[this.threadId] = this.savedThreadChats;
//         this.chatService.addChatsToStorage(this.senderId, this.savedUserChats);
//     }

//     getDefaultNewThreadParams(message) {
//         const params: any = {};
//         let name = this.userInfo.firstname ? this.userInfo.firstname : '';
//         name += this.userInfo.lastname ? ' ' + this.userInfo.lastname : '';
//         params.sender = { name: name || 'Anonymous', id: this.userInfo.id };
//         params.recipient = { name: this.recipientName, id: this.recipientId };
//         params.lastmessagetime = message.datetime || '';
//         params.read = [this.senderId];
//         params.users = [this.senderId, this.recipientId];
//         params.messages = [message];
//         return params;
//     }

//     // This method add a new object into the message array with just the date,
//     // so we can differentiate between chat days..
//     checkIsNewMessagingDay(date) {
//         let newDay = false;
//         if (!this.lastMessageSentTime) {
//             this.lastMessageSentTime = date;
//             newDay = true;
//         } else {
//             const dateString = date.toLocaleDateString(),
//             lastMTime = new Date(this.lastMessageSentTime),
//             lastMTimeString = lastMTime.toLocaleDateString();
//             if (dateString !== lastMTimeString) {
//                 newDay = true;
//             }
//         }
//         return newDay;
//     }

//     // check if we can delete message from server after read
//     checkDeleteRecord(results) {
//         if (results && results.messages.length > 0) {
//             if (results.read && results.read.length > 0 && results.read[0] !== this.senderId) {
//                 this.chatService.deleteRecord(this.threadId);
//                 this.savedThreadChats.read = [];
//             }
//         }
//     }
// }
