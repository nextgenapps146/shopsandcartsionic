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
  messages = [];
  constructor(private route: ActivatedRoute, private router: Router, public authService: AuthServiceService,
    public fsServices: FirestoreService) {
    this.loadMessage()
  }
  
  loadMessage() {
    this.route.queryParams.subscribe(params => {
      debugger;
      if (params && params.chatcontactid) {
        this.chatcontactid =params.chatcontactid;
        this.loadChatMessage();
      }
    });
  }
  
  loadChatMessage() {
    this.fsServices.getChatMessages(this.chatcontactid).then((messages) => {
      messages.subscribe(list => {
        list.reverse()
        this.messages = list;
      });
    });
  }
  message: any;
  ngOnInit() {
  }

  getTime(data) {
    var date = new Date(data)
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  isMyMessage(message){
    return message.senderid == this.userid;
  }

  sendMessage() {
    var data = {
      chatcontactid: this.chatcontactid,   // this is id from the above user list
      message:this.message
    }
    this.fsServices.addChatMessage(data, this.userid)
  }

}
