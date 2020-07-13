import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { UtilsService } from '../../services/utils.service';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { CartService } from '../../services/CartServices/cart.service';

@Component({
    selector: 'app-delivery',
    templateUrl: './delivery.page.html',
    styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {
    @ViewChild('slides', { static: true }) slides: IonSlides;
    public address;
    public Time;
    public DeliveryMode;
    public PaymentMode;
    public Days;
    public CurrentIndex = 0;
    slideOpts = {
        effect: 'flip',
    };
    public SlideIndex: any = 0;
    selectedTime: any = '6AM - 9AM';
    selectedDeliveryMode: any;
    selectedPaymentMode: any;
    addressvalue: any;
    addressList = [];
    selectedDay: any = 'Sunday';
    addressArray;
    paymentmode: any;
    storename: any;
    customername: any;
    data = [];
    storeid: any;

    isDeliver = true;
    isPickup = false;
    isCurve = false;

    itemId: any;
    deliveryAddress: any;

    constructor(
        private route: Router,
        private router: ActivatedRoute,
        public cart: CartService,
        public utils: UtilsService,
        public fireStore: FirestoreService
    ) {

        this.Days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        this.Time = [
            '6AM - 9AM',
            '10AM - 1PM',
            '4PM - 7PM',
            '8PM - 11PM',
            '9AM - 4PM',
        ];
        this.DeliveryMode = ['Deliver', 'Pickup', 'Curve site'];
        this.PaymentMode = ['Online', 'Cash on dlivery', 'Pay at store'];
        this.utils.AddAdressBackUrl = '/delivery';
        this.customername = this.utils.userInfo.username;
        this.getCartData();
    }


    ngOnInit() { }
    async getCartData() {
        await this.router.queryParams.subscribe((params) => {
            if (params && params.storeid && params.storename) {
                this.storeid = params.storeid;
                this.storename = params.storename;
                this.selectedDeliveryMode = params.selecteddeliverymode;
                this.selectedPaymentMode = params.selectedpaymentmode;
                this.addressvalue = params.addressvalue;
            }
        });

        await this.getDeliveryAddress();

    }

    addAddress() {
        this.route.navigate(['add-address']);
    }

    slideTap(index) {
        this.CurrentIndex = index;
        this.SlideIndex = index;
        this.slides.slideTo(index, 200);
    }

    slideChanged() {
        this.slides.getActiveIndex().then((res) => {
            this.CurrentIndex = res;
            this.SlideIndex = res;
        });
    }

    checkDeliveryMode(deliveryMode) {
        this.isDeliver = false;
        this.isPickup = false;
        this.isCurve = false;
        if (deliveryMode === 'Deliver') {
            this.isDeliver = true;
        }
        if (deliveryMode === 'Pickup') {
            this.isPickup = true;
        }
        if (deliveryMode === 'Curve site') {
            this.isCurve = true;
        }
    }

    getDeliveryAddress() {
        this.fireStore.getDeliveryAddress(this.addressvalue).then((address) => {
            address.subscribe((address) => {
                this.address = address;
                if (this.address) {
                    this.deliveryAddress = this.address;
                }
            });
        });
    }


    async paymentPage() {

        // switch (this.SlideIndex) {
        //   case 0:
        //     this.selectedDay = 'Sunday';
        //     break;
        //   case 1:
        //     this.selectedDay = 'Monday';
        //     break;
        //   case 2:
        //     this.selectedDay = 'Tuesday';
        //     break;
        //   case 3:
        //     this.selectedDay = 'Wednesday';
        //     break;
        //   case 4:
        //     this.selectedDay = 'Thrusday';
        //     break;
        //   case 5:
        //     this.selectedDay = 'Friday';
        //     break;
        //   default:
        //     this.selectedDay = 'Saturday';

        // }
        if (
            this.selectedDeliveryMode && this.selectedPaymentMode && this.deliveryAddress) {
            // if (this.selectedDeliveryMode == 'Deliver') {
            //   if (this.address) {
            //     this.deliveryAddress = this.address;
            //   } else {
            //     return this.utils.presentToast(
            //       'Please add delivery address',
            //       true,
            //       'top',
            //       2100
            //     );
            //   }
            // }
            // const getAddress = (address) => {
            //   try {
            //     return address.flatNumber || '';
            //   } catch (err) {
            //     return '';
            //   }
            // }
            const record = {
                addressvalue: this.address,
                selecteddeliverymode: this.selectedDeliveryMode,
                selectedpaymentmode: this.selectedPaymentMode,
                storeid: this.storeid,
                storename: this.storename,
                customerid: this.utils.userInfo.id,
                customername: this.utils.userInfo.username,
                total: this.cart.grandTotal,
                status: 'New',
                created_date: new Date().getTime(),
            };

            const addedOrder = await this.fireStore.addOrder(record);
            this.itemId = addedOrder;

            for (
                let item_counter = 0;
                item_counter < this.cart.addCart.length;
                item_counter++
            ) {
                const data = {
                    orderid: this.itemId,
                    itemid: this.cart.addCart[item_counter].id,
                    itenname: this.cart.addCart[item_counter].name,
                    itemimage: this.cart.addCart[item_counter].images[0],
                    quantity: this.cart.addCart[item_counter].units,
                    amount: this.cart.addCart[item_counter].salePrice,
                };
                this.fireStore.addOrderItem(data);
            }
            const dataPush = {
                title: 'New order request',
                body: 'You have ordered',
                token: this.utils.userInfo.id, // it should be customer token
                targetid: this.utils.userInfo.token, // it is customer id
            };

            this.fireStore.sendNotificaion(dataPush);
            this.utils.presentToast(
                'You have ordered successfully',
                true,
                'top',
                2100
            );
            this.cart.removeCurrentStore();
            this.route.navigate(['home']);
        } else {
            this.utils.presentToast(
                'All field is required here',
                true,
                'top',
                2100
            );
        }

        // this.route.navigate(['payment', {
        //   selectedDay: this.selectedDay,
        //   addressvalue: this.addressvalue,
        //   selectedTime: this.selectedTime,
        //   selecteddeliverymode:this.selectedDeliveryMode,
        //   selectedpaymentmode:this.selectedPaymentMode
        // }]);
    }
}
