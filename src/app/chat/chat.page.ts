import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore/firestore.service';
import { AuthServiceService } from '../services/Auth/auth-service.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
    userId = 'iu63d2eRkx5epcnKnKsr';
    users: any = [];
    messages: any = [];
    messagetime: any;
    constructor(public router: Router, public authService: AuthServiceService,
        public fsServices: FirestoreService) {

        this.authService.userId.subscribe(filter => {
            console.log(filter);
            // this.fsServices.getCurrentUserInfo(filter.$uid).then((data) => {
            //   data.subscribe(todos => {});
            // });
        });

        this.fsServices.getChatUsers(this.userId).then((users) => {
            users.subscribe(list => {
                this.users = list;
                for (let i = 0; i < this.users.length; i++) {
                    const date = new Date(this.users[i].lastmessagetime);
                    this.users[i].lastmessagetime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                }
            });
        });
    }

    ngOnInit() {
    }

    onChatroom(chatcontactid, custoemername) {
        let navigationExtras = {
            queryParams: {
                chatcontactid: chatcontactid,
                custoemername: custoemername
            }
        };
        this.router.navigate(['chatroom'], navigationExtras);
    }
}
