import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/DataServices/data.service';
import { CartService } from '../../services/CartServices/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UtilsService } from '../../services/utils.service';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { AddressService } from '../../services/address.service';
import { LoginPage } from '../../modules/login/login.page';
import { SignupPage } from '../../modules/signup/signup.page';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {
    // storeid: any;
    // storename: any;
    // selectedPaymentMode: any;
    // selectedAddress: any;
    // selecteddeliverymode: any;
    // addressvalue: any;
    // addressArray: any;
    // address: any;
    // addressList = [];

    qpMap: any;
    storeInfo: any;
    cartItems: any;
    currentModifyingItem: any;

    constructor(
        public dataServ: DataService,
        public cart: CartService,
        public route: Router,
        public router: ActivatedRoute,
        public alertController: AlertController,
        private modalController: ModalController,
        public utils: UtilsService,
        public fireStore: FirestoreService,
        private addressService: AddressService
    ) {
        this.storeInfo = this.utils.userShoppingStoreInfo.name;
        this.qpMap = this.utils.quantitiesAndProductsMap;
        // if (this.qpMap && this.qpMap['totalCart']) {
        //     this.getAddress();
        // }
    }

    // getAddress() {
    //     this.addressService.getUserAddress().then((address) => {
    //         address.subscribe((address) => {
    //             address.forEach(element => {
    //                 const addr = element.flatNumbers + ',' + element.street + ',' + element.locality;
    //                 element = { ...element, fullAddress: addr };
    //             });
    //             address.unshift({ fullAddress: 'Add New Address', addressType: 'new' });
    //             this.addressArray = address;
    //         });
    //     });
    // }

    // addAddress() {
    //     this.route.navigate(['add-address']);
    // }

    ngOnInit() {
        // this.addCart();
        this.getItemsFromQpMap(this.qpMap);
    }

    getItemsFromQpMap(qpMap) {
        this.cartItems = [];
        const _instance = this,
        ignoreFields = ['totalCart', 'items', 'totalItems', 'totalCharges'];
        Object.keys(qpMap).forEach(function (key) {
            if (ignoreFields.indexOf(key) === -1) {
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
            this.login();
        } else {
            this.route.navigate(['delivery']);
        }
    }

    async login() {
        const modal = await this.modalController.create({
            component: LoginPage
        });
        modal.onDidDismiss().then((res) => {
            if (res && res.data === 'signup') {
                this.signup();
            }
        });
        return await modal.present();
    }

    async signup() {
        const modal = await this.modalController.create({
            component: SignupPage
        });
        modal.onDidDismiss().then((res) => {
            if (res && res.data === 'login') {
                this.signup();
            }
        });
        return await modal.present();
    }

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

    // addCart() {
    //     this.cart.deliveryCharge = 0;
    //     this.cart.totalSave = 0;
    //     this.cart.grandTotal = 0;
    //     this.cart.addCart.map((el) => {
    //         const total = el.units * parseFloat(el.salePrice || 0);
    //         this.cart.subTotal += parseFloat(total.toString());
    //         this.cart.deliveryCharge = parseFloat(el.deliveryCharge)
    //             ? this.cart.deliveryCharge + el.deliveryCharge
    //             : this.cart.deliveryCharge;
    //         this.cart.grandTotal += this.cart.subTotal + this.cart.deliveryCharge;
    //         this.cart.totalSave +=
    //             el.units *
    //             (parseFloat(el.regularPrice) - parseFloat(el.salePrice || 0));
    //     });
    // }

    // startShopping() {
    //     this.route.navigate(['home']);
    // }

    // updateCart(productID, type) {
    //     const productunits = this.cart.addCart.find((el) => el.id === productID);
    //     let id;

    //     if (type === 'add') {
    //         productunits.units += 1;
    //         this.cart.productQty += 1;
    //         const total = 1 * productunits.salePrice;
    //         this.cart.subTotal = this.cart.subTotal + total;
    //         this.cart.grandTotal = this.cart.subTotal + this.cart.deliveryCharge;

    //     }

    //     if (type === 'remove') {
    //         if (productunits.units > 1) {
    //             productunits.units -= 1;
    //             id = productunits.id;
    //             this.cart.productQty -= 1;
    //             const total = 1 * productunits.salePrice;
    //             this.cart.subTotal = this.cart.subTotal - total;
    //             this.cart.grandTotal = this.cart.subTotal + this.cart.deliveryCharge;

    //         } else {
    //             this.removeProduct(productID, id);
    //         }
    //     }
    //     this.addCart();
    //     this.cart.setCurrentStore(this.storeid);
    // }

    // async removeProduct(productID, index, productUnit?) {
    //     const alert = await this.alertController.create({
    //         header: 'Remove From Cart!',
    //         message: 'Are you Sure you want to remove this Product',
    //         buttons: [
    //             {
    //                 text: 'Cancel',
    //                 role: 'cancel',
    //                 cssClass: 'secondary',
    //                 handler: (cancel) => { },
    //             },
    //             {
    //                 text: 'Remove',
    //                 handler: () => {
    //                     this.cart.productQty = this.cart.productQty - productUnit || 0;
    //                     const productunits = this.cart.addCart.find(
    //                         (el) => el.id === productID
    //                     );
    //                     const total = 1 * productunits.salePrice;
    //                     this.cart.subTotal = this.cart.subTotal - total;
    //                     this.cart.grandTotal =
    //                         this.cart.subTotal + this.cart.deliveryCharge;
    //                     productunits.units = 0;
    //                     if (this.cart.productQty === 0) {
    //                         this.cart.subTotal = 0;
    //                         this.cart.grandTotal = 0;
    //                     }
    //                     this.cart.addCart.splice(index, 1);
    //                     this.addCart();
    //                 },
    //             },
    //         ],
    //     });

    //     await alert.present();
    // }

    // deliveryAddress() {
    //     const navigationExtras = {
    //         queryParams: {
    //             addressvalue: this.addressvalue,
    //             selecteddeliverymode: this.selecteddeliverymode,
    //             selectedpaymentmode: this.selectedPaymentMode,
    //             storeid: this.storeid,
    //             storename: this.storename,
    //         },
    //     };
    //     this.route.navigate(['delivery'], navigationExtras);
    // }
}
