import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { UtilsService } from '../../services/utils.service';
import { CartService } from '../../services/CartServices/cart.service';
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
    currentAddingItem: any = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private utils: UtilsService,
        private fireStore: FirestoreService,
        public cart: CartService) {
        this.route.queryParams.subscribe(params => {
            if (params && params.storeid && params.storename) {
                this.storeid = params.storeid;
                this.storename = params.storename;
                localStorage.setItem('sellerid', this.storeid);
                this.cart.setCurrentStore(this.storeid);

                let productQty = 0;
                this.cart.addCart.map((el) => {
                    productQty += el.units;
                });
                this.cart.productQty = productQty;
            }
        });
    }

    ngOnInit() {
        this.fireStore.getStoreProducts().then((data) => {
            data.subscribe(list => {
                for (let elc = 0; elc < (list || []).length; elc++) {
                    const product = list[elc];
                    const productunits = this.cart.addCart.find(el => el.id === product.id);
                    if (productunits) {
                        (<any>list[elc]).units = productunits.units;
                    } else {
                        (<any>list[elc]).units = 0;
                    }
                }
                this.storeProductsList = list;
                console.log(list);
            });
        });
    }

    getChatUsers() {
        this.fireStore.checkChatContacts(this.storeid).then((messages) => {
            messages.subscribe(async (list) => {
                // this.users = list;
                console.log(list);
                const index = (list || []).findIndex((r) => r.customerid === this.utils.userInfo.id && r.sellerid === this.storeid);
                if (index < 0) {
                    const record = {
                        sellerid: this.storeid,
                        customerid: this.utils.userInfo.id,
                        sellerimage: 's.png',
                        sellername: this.storename,
                        customerimage: 'c.png',
                        customername: this.utils.userInfo.username
                    };
                    await this.fireStore.addChatContacts(record);
                } else {
                    const record = list[index];
                    const navigationExtras = {
                        queryParams: {
                            chatcontactid: record.chatcontactid,
                            sellerid: record.sellerid
                        }
                    };
                    this.router.navigate(['chatroom'], navigationExtras);
                    // this.router.navigateByUrl("/chatroom")
                }
            });
        });
    }

    enableItemAdding(product) {
        this.currentAddingItem = product;
        this.currentAddingItem.isItemAdding = true;
    }

    disableItemAdding() {
        if (this.currentAddingItem) {
            this.currentAddingItem.isItemAdding = false;
        }
    }

    addToCart(product) {
        this.disableItemAdding();
        this.enableItemAdding(product);
        const productunits = this.cart.addCart.find(el => el.id === product.id);
        if (productunits) {
            productunits.units += 1;
            this.cart.productQty += 1;
            product.units = productunits.units;
        } else {
            product.units = 1;
            this.cart.addCart.push(product);
            this.cart.productQty += 1;
        }
        this.cart.setCurrentStore(this.storeid);
    }

    updateCart(productID, type, product) {
        const productunits = this.cart.addCart.find(el => el.id === productID);
        const productIndex = this.cart.addCart.indexOf(el => el.id === productID);
        if (type === 'add') {
            productunits.units += 1;
            this.cart.productQty += 1;
            product.units = productunits.units;
        }
        if (type === 'remove') {
            productunits.units -= 1;
            this.cart.productQty -= 1;
            product.units = productunits.units;
            if (product.units === 0) {
                this.cart.addCart.splice(productIndex, 1);
                this.disableItemAdding();
            }
        }
        this.cart.setCurrentStore(this.storeid);
    }

    onchatroom() {
        this.getChatUsers();
        // this.router.navigateByUrl("/chatroom")
    }

    cartPage() {
        const navigationExtras = {
            queryParams: {
                storeid: this.storeid,
                storename: this.storename
            }
        };
        this.router.navigate(['cart'], navigationExtras);
    }
}
