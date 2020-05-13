import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../services/firestore/firestore.service';
import { UtilsServiceService } from '../services/Utils/utils-service.service';
import { constants } from 'buffer';
@Component({
    selector: 'app-store',
    templateUrl: './store.page.html',
    styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
    storeProductsList: any;
    storeid: any;
    storename: any;
    users = [];
    result: any;
    userId = this.utils.userInfo.id;

    constructor(private router: Router, private route: ActivatedRoute,
        private utils: UtilsServiceService, private fireStore: FirestoreService) {
        this.route.queryParams.subscribe(params => {
            if (params && params.storeid && params.storename) {
                this.storeid = params.storeid;
                this.storename = params.storename;
                localStorage.setItem('sellerid', this.storeid);
            }
        });
    }

    ngOnInit() {
        this.fireStore.getStoreProducts().then((data) => {
            data.subscribe(list => {
                this.storeProductsList = list;
                console.log(list);
            });
        });
    }

    getChatUsers() {
        this.fireStore.checkChatContacts(this.storeid).then((messages) => {
            messages.subscribe(async (list) => {
                //this.users = list;
                console.log(list);
                var index = (list || []).findIndex((r) => r.customerid === this.utils.userInfo.id && r.sellerid == this.storeid);
                if (index < 0) {
                    var record = {
                        sellerid: this.storeid,
                        customerid: this.utils.userInfo.id,
                        sellerimage: 's.png',
                        sellername: this.storename,
                        customerimage: 'c.png',
                        customername: this.utils.userInfo.username
                    }
                    await this.fireStore.addChatContacts(record);
                } else {
                    const record = list[index];
                    let navigationExtras = {
                        queryParams: {
                            chatcontactid: record.chatcontactid,
                            sellerid: record.sellerid
                        }
                    };
                    this.router.navigate(['chatroom'], navigationExtras);
                    //this.router.navigateByUrl("/chatroom")
                }
            });
        });

    }

    onchatroom() {
        this.getChatUsers();
        //this.router.navigateByUrl("/chatroom")
    }
}
