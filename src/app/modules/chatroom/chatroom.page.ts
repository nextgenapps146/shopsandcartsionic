import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { UtilsService } from '../../services/utils.service';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';

@Component({
    selector: 'app-chatroom',
    templateUrl: './chatroom.page.html',
    styleUrls: ['./chatroom.page.scss'],
})

export class ChatroomPage implements OnInit {
    userid = this.utils.userInfo.id;
    chatcontactid: any;
    custoemername: any;

    sellerid: any;
    sellertoken: any;
    sellername: any;

    users = [];
    messages = [];
    seller: any;

    messagetime: any;
    message: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public authService: AuthServiceService,
        public fsServices: FirestoreService,
        private userService: UserService,
        private chatService: ChatService,
        private utils: UtilsService
    ) {
        this.loadMessage();
    }

    ngOnInit() { }

    loadMessage() {
        this.route.queryParams.subscribe((params) => {
            if (params && params.chatcontactid) {
                this.chatcontactid = params.chatcontactid;
                this.sellerid = params.sellerid;
                this.loadChatMessage();
                this.userService.getUserInfo(this.sellerid).then((users) => {
                    users.subscribe((seller: any) => {
                        this.sellername = seller.username;
                        this.sellertoken = seller.token;
                    });
                });
                this.chatService.loadChatContactDetails(this.chatcontactid).then((users) => {
                    users.subscribe((chatcontact) => {
                        this.custoemername = chatcontact.customername;
                    });
                });
            }
        });
    }

    loadChatMessage() {
        this.chatService.getChatMessages(this.chatcontactid).then((messages) => {
            messages.subscribe((list) => {
                this.messages = list;
                for (let i = 0; i < this.messages.length; i++) {
                    const date = new Date(this.messages[i].messagetime);
                    this.messages[i].messagetime = date.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    });
                }
            });
        });
    }

    isMyMessage(message) {
        return message.senderid === this.userid;
    }

    sendMessage() {
        if (this.message === '') {
            return;
        }

        const data = {
            chatcontactid: this.chatcontactid, // this is id from the above user list
            message: this.message,
        };

        this.chatService.addChatMessage(data, this.userid);
        if (this.sellertoken) {
            const dataPush = {
                title: this.custoemername + ' has sent you a new message',  // user shoudl be replace with username
                body: this.message,
                token: this.sellertoken,
                targetid: this.sellerid,
            };

            this.chatService.addChatPushMessage(dataPush);
        }
    }
}
