/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */



import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { UtilsServiceService } from '../services/Utils/utils-service.service';
import { FirestoreService } from '../services/firestore/firestore.service';
import { CartService } from '../services/CartServices/cart.service';

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
    effect: 'flip'
  };
  public SlideIndex: any = 0;
  selectedTime: any = '6AM - 9AM';
  selectedDeliveryMode: any = 'Deliver';
  selectedPaymentMode: any = 'Online';
  addressvalue: any = '';
  selectedDay: any = 'Sunday';
  addressArray;
  paymentmode: any;
  data = [];
  constructor(private route: Router, private router: ActivatedRoute,
    public cart: CartService,
    public utils: UtilsServiceService, public fireStore: FirestoreService) {
    this.Days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    this.Time = ['6AM - 9AM', '10AM - 1PM', '4PM - 7PM', '8PM - 11PM', '9AM - 4PM'];
    this.DeliveryMode = ['Deliver', 'Pickup', 'Curve site'];
    this.PaymentMode = ['Online', 'Cash on dlivery', 'Pay at store']
    this.fireStore.getUserAddress().then((data) => {
      this.addressArray = data;
    });
    this.utils.AddAdressBackUrl = '/delivery';
  }


  ngOnInit() {
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

  check() {

  }
  itemId: any;
  deliveryAddress: any;
  async paymentPage() {
    switch (this.SlideIndex) {
      case 0:
        this.selectedDay = 'Sunday';
        break;
      case 1:
        this.selectedDay = 'Monday';
        break;
      case 2:
        this.selectedDay = 'Tuesday';
        break;
      case 3:
        this.selectedDay = 'Wednesday';
        break;
      case 4:
        this.selectedDay = 'Thrusday';
        break;
      case 5:
        this.selectedDay = 'Friday';
        break;
      default:
        this.selectedDay = 'Saturday';

    }

    if (this.selectedDay && this.selectedTime && this.selectedDeliveryMode && this.selectedPaymentMode
      && this.cart.grandTotal) {
      if (this.selectedDeliveryMode == "Deliver") {
        if (this.addressvalue) {
          this.deliveryAddress = this.addressvalue
        }
        else {
          return this.utils.presentToast('Please add delivery address', true, 'bottom', 2100);
        }
      }
      const record = {
        selectedDay: this.selectedDay,
        addressvalue: this.deliveryAddress || '',
        selectedTime: this.selectedTime,
        selecteddeliverymode: this.selectedDeliveryMode,
        selectedpaymentmode: this.selectedPaymentMode,
        storeid: "0Ecg83uZFpT3MAlONXJLicIov4e2",
        customerid: this.utils.userInfo.id,
        customername: this.utils.userInfo.username,
        total: this.cart.grandTotal,
        status: 'New',
      }

      let addedOrder = await this.fireStore.addOrder(record);
      this.itemId = addedOrder

      for (var item_counter = 0; item_counter < this.cart.addCart.length; item_counter++) {

        const data = {
          orderid: this.itemId,
          itemid: this.cart.addCart[item_counter].id,
          itenname: this.cart.addCart[item_counter].name,
          itemimage: this.cart.addCart[item_counter].images[0],
          quantity: this.cart.addCart[item_counter].units,
          amount: this.cart.addCart[item_counter].salePrice
        }
        this.fireStore.addOrderItem(data)

      }
    }
    else {
      this.utils.presentToast('All field is required here', true, 'bottom', 2100);
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
