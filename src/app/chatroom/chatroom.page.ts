import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../services/firestore/firestore.service';
import { AuthServiceService } from '../services/Auth/auth-service.service';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {
  userid = "iu63d2eRkx5epcnKnKsr";
  chatcontactid: any;
  custoemername:any;
  messages = [];
  constructor(private route: ActivatedRoute, private router: Router, public authService: AuthServiceService,
    public fsServices: FirestoreService) {
    this.loadMessage()
  }
  
  loadMessage() {
    this.route.queryParams.subscribe(params => {
      if (params && params.chatcontactid) {
        this.chatcontactid =params.chatcontactid;
        this.custoemername=params.custoemername
        this.loadChatMessage();
      }
    });
  }
  messagetime:any;
  loadChatMessage() {
    this.fsServices.getChatMessages(this.chatcontactid).then((messages) => {
      messages.subscribe(list => {
        this.messages = list;
      for (let i = 0; i < this.messages.length; i++) {
      const date = new Date(this.messages[i].messagetime)
      this.messages[i].messagetime=date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        }
      });
    });
  }
  message: any;
  ngOnInit() {
  }

  isMyMessage(message){
    return message.senderid == this.userid;
  }

    sendMessage() {
    var data = {
      chatcontactid: this.chatcontactid,   // this is id from the above user list
      message: this.message
    }
    this.fsServices.addChatMessage(data, this.userid);  

    var dataPush = {
      title :"User has sent you a new message"
      body: this.message
      token:"" // oppenet token id 
      targetid:"" // opponene userid 
    }

    this.fsServices.addChatPushMessage(data);
  }

}
