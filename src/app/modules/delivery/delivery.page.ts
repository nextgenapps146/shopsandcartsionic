import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonSlides, ModalController, AlertController } from '@ionic/angular';
import { UtilsService } from '../../services/utils.service';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { CartService } from '../../services/CartServices/cart.service';
import { ChatService } from '../../services/chat.service';
import { OrderService } from '../../services/order.service';
import { AddressService } from '../../services/address.service';
import { LocationPage } from '../location/location.page';
import { StorageService } from '../../services/storage.service';

@Component({
    selector: 'app-delivery',
    templateUrl: './delivery.page.html',
    styleUrls: ['./delivery.page.scss'],
})

export class DeliveryPage implements OnInit {

    addressArray: any;
    qpMap: any;
    storeInfo: any;
    selectedAddress: any;
    selectedDelivery: any;
    selectedPayment: any;

    finalOrder: any;
    enablePlaceOrder: boolean;

    constructor(
        private route: Router,
        private router: ActivatedRoute,
        public cart: CartService,
        private chatService: ChatService,
        private orderService: OrderService,
        public utils: UtilsService,
        private addressService: AddressService,
        private modalController: ModalController,
        private alertController: AlertController,
        public fireStore: FirestoreService
    ) {
        this.storeInfo = this.utils.userShoppingStoreInfo;
        this.qpMap = this.utils.quantitiesAndProductsMap;
        if (this.qpMap && this.qpMap['totalCart']) {
            this.getAddress();
            this.prepareOrderObject();
        }
    }

    ngOnInit() { }

    getAddress() {
        const addresses = this.addressService.getUserAddress(this.utils.userInfo.id);
        addresses.items.unshift({ fullAddress: 'Add New Address' });
        this.addressArray = addresses.items;
        this.selectedAddress = addresses.selected;
        this.utils.orderUserAddress = this.selectedAddress;
    }

    async addressChange() {
        if (this.selectedAddress === 'Add New Address') {
            const modal = await this.modalController.create({
                component: LocationPage,
                cssClass: 'rateUs'
            });
            modal.onDidDismiss().then((res) => {
                if (res.data) {
                    this.addAddress(res.data);
                }
            });
            return await modal.present();
        } else {
            this.addressService.addUserAddress(this.utils.userInfo.id, '', this.selectedAddress);
            this.utils.orderUserAddress = this.selectedAddress;
        }
    }

    addAddress(address) {
        const addr = address.streetnumber + ' ' + address.route + ', ' + address.city + ' ' +
        address.state + ' ' + address.zipcode;
        address.fullAddress = addr;
        this.addressService.addUserAddress(this.utils.userInfo.id, address, addr);
        this.getAddress();
    }

    deliveryChange() {
        this.prepareOrderObject();
    }

    paymentChange() {
        this.prepareOrderObject();
    }

    prepareOrderObject() {
        this.enablePlaceOrder = false;
        this.finalOrder = {};
        const params = {};
        if (this.selectedDelivery && this.selectedPayment) {
            params['paymentMode'] = this.selectedPayment;
            params['deliveryType'] = this.selectedDelivery;
            if (this.selectedDelivery === 'Home Delivery') {
                if (this.selectedAddress) {
                    params['orderAddress'] = this.selectedAddress;
                    this.enablePlaceOrder = true;
                } else {
                    this.enablePlaceOrder = false;
                }
            } else {
                delete params['orderAddress'];
                this.enablePlaceOrder = true;
            }
        }
        if (this.enablePlaceOrder) {
            params['items'] = this.qpMap['items'];
            params['totalitems'] = this.qpMap['totalItems'];
            params['totalitemsquantity'] = this.qpMap['totalCart'];
            params['totalcharges'] = this.qpMap['totalCharges'];
            params['orderplaceddate'] = new Date().toLocaleString();
            params['customername'] = this.utils.userInfo.firstname + ' ' + this.utils.userInfo.lastname;
            params['customerphone'] = this.utils.userInfo.phone;
            params['customerid'] = this.utils.userInfo.id;
            params['storeid'] = this.storeInfo.id;
            params['storename'] = this.storeInfo.name;
            params['status'] = 'Open';
            params['deliverystatus'] = 'nd'; // means not delivered
            this.finalOrder = params;
        }
    }

    placeOrder() {
        const randomNumber = this.utils.getRandomNumber();
        this.orderService.placeOrder(randomNumber, this.finalOrder).then(async () => {
            this.finalOrder['id'] = randomNumber;
            this.orderService.saveOrderToStorage(this.utils.userInfo.id, this.finalOrder, true);
            this.utils.quantitiesAndProductsMap = {};
            this.presentOrderConfirmMessage();
        })
        .catch(err => {
            this.utils.presentToast('Having Issues placing order. Please try later.');
        });
    }

    async presentOrderConfirmMessage() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Confirm!',
          message: '<strong>Thank you!</strong> Your order is successfully placed. Please go to orders to check the status or contact/chat with your store directly.',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                const navigationExtras = {
                    queryParams: {
                        storeId: this.storeInfo.id,
                        storeName: this.storeInfo.name
                    }
                };
                this.route.navigate(['store'], navigationExtras);
              }
            }
          ]
        });
        await alert.present();
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
}
