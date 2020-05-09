import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../services/firestore/firestore.service';
import { constants } from 'buffer';
@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  storeid: any
  storename: any
  constructor(private router: Router, private route: ActivatedRoute, private fireStore: FirestoreService) {
    this.route.queryParams.subscribe(params => {
      if (params && params.storeid && params.storename) {
        this.storeid = params.storeid;
        this.storename = params.storename;

      }
    });

  }
  users = [];
  result: any;
  userId = 'EbGeKxxrcvdlzsBnzuV87Ii9I6h1';
  getChatUsers() {
    this.fireStore.checkChatContacts(this.storeid).then((messages) => {
      messages.subscribe(list => {
        this.users = list;
        for (let i = 0; i < this.users.length; i++) {
          const date = new Date(this.users[i].lastmessagetime);
          this.users[i].lastmessagetime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        }
      });
    });
    if (this.users && this.users.length == 0) {
      var record = {
        sellerid: this.storeid,
        customerid: this.userId
      }
      this.fireStore.addChatContacts(record)
    }
  }
  ngOnInit() {
  }
  onchatroom() {
    this.getChatUsers();
    //this.router.navigateByUrl("/chatroom")
  }
}
