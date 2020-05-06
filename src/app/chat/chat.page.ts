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

  users: any = [];
  messages: any = [];
  constructor(  public router: Router, public authService: AuthServiceService,
    public fsServices: FirestoreService) {

      this.authService.userId.subscribe(filter => {
        console.log(filter);
        // this.fsServices.getCurrentUserInfo(filter.$uid).then((data) => {
        //   data.subscribe(todos => {});
        // });
      });

      let userId =  "iu63d2eRkx5epcnKnKsr";


      const record = {
        sellerid: "2hUM0qvxNNUVXLYj2CbM",
        sellerame: "seller",
        sellerimage: "s.png",
        customerid: "iu63d2eRkx5epcnKnKsr",
        custoemername: "customer",
        custoemerimage: "c.png"
      }

      //this.fsServices.addChatUsers(record);

      this.fsServices.getChatUsers(userId).then((users) => {
        users.subscribe(list => {
          this.users = list;
        });
      });


      const record1 = {
        chatcontactid: "5lGJFcbd41IhRFg7jmoO",   // this is id from the above user list
        message: "this is test message"
      };

      //this.fsServices.addChatMessage(record1);

      this.fsServices.getChatMessages("5lGJFcbd41IhRFg7jmoO").then((messages) => {
        messages.subscribe(list => {
          this.messages = list;
        });
      });

   }

  ngOnInit() {
  }
  onChatroom()
  {
    this.router.navigateByUrl("/chatroom");
  }
}
