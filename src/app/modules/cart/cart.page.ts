import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/DataServices/data.service';
import { CartService } from '../../services/CartServices/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UtilsService } from '../../services/utils.service';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Platform, ModalController, MenuController } from '@ionic/angular';
import { LocationPage } from '../location/location.page';
import { AddressService } from '../../services/address.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {
    storeid: any;
    storename: any;
    selectedPaymentMode: any;
    selectedAddress: any;
    selecteddeliverymode: any;
    addressvalue: any;
    addressArray: any;
    address: any;
    addressList = [];

    constructor(
        public dataServ: DataService,
        public cart: CartService,
        public route: Router,
        public router: ActivatedRoute,
        public alertController: AlertController,
        public utils: UtilsService,
        public fireStore: FirestoreService,
        private addressService: AddressService,
        private modalController: ModalController
    ) {
        this.router.queryParams.subscribe((params) => {
            if (params && params.storeid && params.storename) {
                this.storeid = params.storeid;
                this.storename = params.storename;
                this.cart.setCurrentStore(this.storeid);
                this.addCart();
                this.getAddress();
            }
        });
    }

    addCart() {
        this.cart.deliveryCharge = 0;
        this.cart.totalSave = 0;
        this.cart.grandTotal = 0;
        this.cart.addCart.map((el) => {
            const total = el.units * parseFloat(el.salePrice || 0);
            this.cart.subTotal += parseFloat(total.toString());
            this.cart.deliveryCharge = parseFloat(el.deliveryCharge)
                ? this.cart.deliveryCharge + el.deliveryCharge
                : this.cart.deliveryCharge;
            this.cart.grandTotal += this.cart.subTotal + this.cart.deliveryCharge;
            this.cart.totalSave +=
                el.units *
                (parseFloat(el.regularPrice) - parseFloat(el.salePrice || 0));
        });
    }
    getAddress() {
        this.addressService.getUserAddress().then((address) => {
            address.subscribe((address) => {
                this.addressList = address;
                this.addressArray = this.addressList;
            });
        });
    }

    addAddress() {
        this.route.navigate(['add-address']);
    }

    ngOnInit() {
        this.addCart();
    }

    startShopping() {
        this.route.navigate(['home']);
    }
    updateCart(productID, type) {
        const productunits = this.cart.addCart.find((el) => el.id === productID);
        let id;

        if (type === 'add') {
            productunits.units += 1;
            this.cart.productQty += 1;
            const total = 1 * productunits.salePrice;
            this.cart.subTotal = this.cart.subTotal + total;
            this.cart.grandTotal = this.cart.subTotal + this.cart.deliveryCharge;

        }

        if (type === 'remove') {
            if (productunits.units > 1) {
                productunits.units -= 1;
                id = productunits.id;
                this.cart.productQty -= 1;
                const total = 1 * productunits.salePrice;
                this.cart.subTotal = this.cart.subTotal - total;
                this.cart.grandTotal = this.cart.subTotal + this.cart.deliveryCharge;

            } else {
                this.removeProduct(productID, id);
            }
        }
        this.addCart();
        this.cart.setCurrentStore(this.storeid);
    }

    async removeProduct(productID, index, productUnit?) {
        const alert = await this.alertController.create({
            header: 'Remove From Cart!',
            message: 'Are you Sure you want to remove this Product',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (cancel) => { },
                },
                {
                    text: 'Remove',
                    handler: () => {
                        this.cart.productQty = this.cart.productQty - productUnit || 0;
                        const productunits = this.cart.addCart.find(
                            (el) => el.id === productID
                        );
                        const total = 1 * productunits.salePrice;
                        this.cart.subTotal = this.cart.subTotal - total;
                        this.cart.grandTotal =
                            this.cart.subTotal + this.cart.deliveryCharge;
                        productunits.units = 0;
                        if (this.cart.productQty === 0) {
                            this.cart.subTotal = 0;
                            this.cart.grandTotal = 0;
                        }
                        this.cart.addCart.splice(index, 1);
                        this.addCart();
                    },
                },
            ],
        });

        await alert.present();
    }

    async addressChange() {
        if (this.selectedAddress === 'add_address') {
            const modal = await this.modalController.create({
                component: LocationPage,
                cssClass: 'rateUs'
            });
            modal.onDidDismiss().then((res) => {
                console.log(res.data);
                const selectedAddressValue = res.data;
                if (selectedAddressValue) {
                    this.addressService.addUserAddress({
                        name: selectedAddressValue.name || '',
                        flatNumber: selectedAddressValue.flatNumber || '',
                        street: selectedAddressValue.street || '',
                        locality: selectedAddressValue.locality || '',
                        title: selectedAddressValue.title || '',
                        addresstype: selectedAddressValue.addresstype || ''
                    }).then(async () => {
                        // this.route.navigate([this.utils.AddAdressBackUrl, { title: 'MyAddress' }]);
                    });
                }
            });
            return await modal.present();
        }
    }

    deliveryAddress() {
        const navigationExtras = {
            queryParams: {
                addressvalue: this.addressvalue,
                selecteddeliverymode: this.selecteddeliverymode,
                selectedpaymentmode: this.selectedPaymentMode,
                storeid: this.storeid,
                storename: this.storename,
            },
        };
        this.route.navigate(['delivery'], navigationExtras);
    }
}
