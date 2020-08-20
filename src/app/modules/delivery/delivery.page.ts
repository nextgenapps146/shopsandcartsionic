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
    // @ViewChild('slides', { static: true }) slides: IonSlides;
    // public address;
    // public Time;
    // public DeliveryMode;
    // public PaymentMode;
    // public Days;
    // public CurrentIndex = 0;
    // slideOpts = {
    //     effect: 'flip',
    // };
    // public SlideIndex: any = 0;
    // selectedTime: any = '6AM - 9AM';
    // selectedDeliveryMode: any;
    // selectedPaymentMode: any;
    // addressvalue: any;
    // addressList = [];
    // selectedDay: any = 'Sunday';
    // addressArray;
    // paymentmode: any;
    // storename: any;
    // customername: any;
    // data = [];
    // storeid: any;

    // isDeliver = true;
    // isPickup = false;
    // isCurve = false;

    // itemId: any;
    // deliveryAddress: any;

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

        // this.Days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        // this.Time = [
        //     '6AM - 9AM',
        //     '10AM - 1PM',
        //     '4PM - 7PM',
        //     '8PM - 11PM',
        //     '9AM - 4PM',
        // ];
        // this.DeliveryMode = ['Deliver', 'Pickup', 'Curve site'];
        // this.PaymentMode = ['Online', 'Cash on dlivery', 'Pay at store'];
        // this.utils.AddAdressBackUrl = '/delivery';
        // this.customername = this.utils.userInfo.username;
        // this.getCartData();
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

    // async getCartData() {
    //     await this.router.queryParams.subscribe((params) => {
    //         if (params && params.storeid && params.storename) {
    //             this.storeid = params.storeid;
    //             this.storename = params.storename;
    //             this.selectedDeliveryMode = params.selecteddeliverymode;
    //             this.selectedPaymentMode = params.selectedpaymentmode;
    //             this.addressvalue = params.addressvalue;
    //         }
    //     });

    //     await this.getDeliveryAddress();

    // }

    // addAddress() {
    //     this.route.navigate(['add-address']);
    // }

    // slideTap(index) {
    //     this.CurrentIndex = index;
    //     this.SlideIndex = index;
    //     this.slides.slideTo(index, 200);
    // }

    // slideChanged() {
    //     this.slides.getActiveIndex().then((res) => {
    //         this.CurrentIndex = res;
    //         this.SlideIndex = res;
    //     });
    // }

    // checkDeliveryMode(deliveryMode) {
    //     this.isDeliver = false;
    //     this.isPickup = false;
    //     this.isCurve = false;
    //     if (deliveryMode === 'Deliver') {
    //         this.isDeliver = true;
    //     }
    //     if (deliveryMode === 'Pickup') {
    //         this.isPickup = true;
    //     }
    //     if (deliveryMode === 'Curve site') {
    //         this.isCurve = true;
    //     }
    // }

    // getDeliveryAddress() {
    //     this.addressService.getDeliveryAddress(this.addressvalue).then((address) => {
    //         address.subscribe((address) => {
    //             this.address = address;
    //             if (this.address) {
    //                 this.deliveryAddress = this.address;
    //             }
    //         });
    //     });
    // }

    // async paymentPage() {
    //     if (this.selectedDeliveryMode && this.selectedPaymentMode && this.deliveryAddress) {
    //         const record = {
    //             addressvalue: this.address,
    //             selecteddeliverymode: this.selectedDeliveryMode,
    //             selectedpaymentmode: this.selectedPaymentMode,
    //             storeid: this.storeid,
    //             storename: this.storename,
    //             customerid: this.utils.userInfo.id,
    //             customername: this.utils.userInfo.username,
    //             total: this.cart.grandTotal,
    //             status: 'New',
    //             created_date: new Date().getTime(),
    //         };

    //         const addedOrder = await this.orderService.addOrder(record);
    //         this.itemId = addedOrder;

    //         for (
    //             let item_counter = 0;
    //             item_counter < this.cart.addCart.length;
    //             item_counter++
    //         ) {
    //             const data = {
    //                 orderid: this.itemId,
    //                 itemid: this.cart.addCart[item_counter].id,
    //                 itenname: this.cart.addCart[item_counter].name,
    //                 itemimage: this.cart.addCart[item_counter].images[0],
    //                 quantity: this.cart.addCart[item_counter].units,
    //                 amount: this.cart.addCart[item_counter].salePrice,
    //             };
    //             this.orderService.addOrderItem(data);
    //         }
    //         const dataPush = {
    //             title: 'New order request',
    //             body: 'You have ordered',
    //             token: this.utils.userInfo.id, // it should be customer token
    //             targetid: this.utils.userInfo.token, // it is customer id
    //         };

    //         this.chatService.sendNotificaion(dataPush);
    //         this.utils.presentToast(
    //             'You have ordered successfully',
    //             true,
    //             'top',
    //             2100
    //         );
    //         this.cart.removeCurrentStore();
    //         this.route.navigate(['home']);
    //     } else {
    //         this.utils.presentToast(
    //             'All field is required here',
    //             true,
    //             'top',
    //             2100
    //         );
    //     }

    // }
}
