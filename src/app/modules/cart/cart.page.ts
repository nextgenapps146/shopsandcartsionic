import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { UtilsService } from '../../services/utils.service';
import { FirestoreService } from '../../services/firestore/firestore.service';
// import { LoginPage } from '../../modules/login/login.page';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {
    qpMap: any;
    storeInfo: any;
    cartItems: any;
    currentModifyingItem: any;

    constructor(
        public route: Router,
        public router: ActivatedRoute,
        public alertController: AlertController,
        private modalController: ModalController,
        public utils: UtilsService,
        public fireStore: FirestoreService,
        private navCtrl: NavController
    ) {
        this.storeInfo = this.utils.userShoppingStoreInfo.name;
        this.qpMap = this.utils.quantitiesAndProductsMap;
    }

    ngOnInit() {
        // this.addCart();
        this.getItemsFromQpMap(this.qpMap);
    }

    handleAddItem(event, item) {
        if (event.name === 'delete') {
            const index = this.cartItems.map(function(e) { return e.id; }).indexOf(item.id);
            this.cartItems.splice(index, 1);
            if (this.cartItems.length === 0) {
                this.navCtrl.pop();
            }
        }
    }

    getItemsFromQpMap(qpMap) {
        this.cartItems = [];
        const _instance = this,
        ignoreFields = ['totalCart', 'items', 'totalItems', 'totalCharges'];
        Object.keys(qpMap).forEach(function (key) {
            if (ignoreFields.indexOf(key) === -1) {
                qpMap[key].isAdding = false;
                _instance.cartItems.push(qpMap[key]);
            }
        });
        // putting these here so that it will be easy in delivery order object
        this.qpMap['items'] = this.cartItems;
        this.qpMap['totalItems'] = this.cartItems.length;
        this.qpMap['totalCharges'] = 79.99;
    }

    enableItemModifying(product) {
        if (this.currentModifyingItem) {
            this.currentModifyingItem.isItemModifying = false;
        }
        product.isItemModifying = true;
        this.currentModifyingItem = product;
    }

    itemLabelClick(product) {
        if (this.currentModifyingItem) {
            this.currentModifyingItem.isItemModifying = false;
            this.currentModifyingItem = null;
        } else {
            // go to product detail page
        }
    }

    updateCart(product, type) {
        if (this.qpMap[product.id]) {
            const orderQty = this.qpMap[product.id].orderQuantity;
            if (type === 'add') {
                // check for available quantity later from store
                this.qpMap[product.id].orderQuantity = orderQty + 1;
                product.orderQuantity = orderQty + 1;
                this.qpMap['totalCart'] = this.qpMap['totalCart'] + 1;
            } else if (type === 'remove') {
                if (orderQty === 1) {
                    this.deleteProduct(product);
                } else {
                    this.qpMap[product.id].orderQuantity = orderQty - 1;
                    product.orderQuantity = orderQty - 1;
                }
                this.qpMap['totalCart'] = this.qpMap['totalCart'] - 1;
            }
        }
    }

    deleteProduct(product) {
        delete this.qpMap[product.id];
        this.getItemsFromQpMap(this.qpMap);
    }

    checkout() {
        if (!this.utils.userInfo.email) {
            // this.login();
        } else {
            this.route.navigate(['delivery']);
        }
    }

    // async login() {
    //     const modal = await this.modalController.create({
    //         component: LoginPage
    //     });
    //     modal.onDidDismiss().then((res) => {
    //         if (res && res.data === 'signup') {
    //             // this.signup();
    //         }
    //     });
    //     return await modal.present();
    // }

    handleHeaderEvents(event) {
        if (event.name === 'message') {
            this.goToChatRoom();
        }
    }

    goToChatRoom() {
        const navigationExtras = {
            queryParams: {
                senderId: this.utils.userInfo.id,
                recepientId: this.storeInfo.id // seller id is the same as storeid
            }
        };
        this.route.navigate(['chatroom'], navigationExtras);
    }
}
