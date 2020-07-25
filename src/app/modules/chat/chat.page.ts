import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { UtilsService } from '../../services/utils.service';
import { ChatService } from '../../services/chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
    userId = this.utils.userInfo.id;
    users: any = [];
    messages: any = [];
    messagetime: any;
    constructor(
        public router: Router,
        public authService: AuthServiceService,
        public chatService: ChatService,
        public fsServices: FirestoreService,
        private utils: UtilsService) {

        this.authService.userId.subscribe(filter => {
            console.log(filter);
        });

        this.chatService.getChatUsers(this.userId).then((users) => {
            users.subscribe(list => {
                this.users = list;
                for (let i = 0; i < this.users.length; i++) {
                    const date = new Date(this.users[i].lastmessagetime);
                    this.users[i].lastmessagetime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                }
            });
        });
    }

    ngOnInit() {
    }

    onChatroom(chatcontactid, sellerid) {
        const navigationExtras = {
            queryParams: {
                chatcontactid: chatcontactid,
                sellerid: sellerid
            }
        };
        this.router.navigate(['chatroom'], navigationExtras);
    }
}
