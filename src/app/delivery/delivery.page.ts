/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */

import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { IonSlides } from "@ionic/angular";
import { UtilsServiceService } from "../services/Utils/utils-service.service";
import { FirestoreService } from "../services/firestore/firestore.service";
import { CartService } from "../services/CartServices/cart.service";

@Component({
  selector: "app-delivery",
  templateUrl: "./delivery.page.html",
  styleUrls: ["./delivery.page.scss"],
})
export class DeliveryPage implements OnInit {
  @ViewChild("slides", { static: true }) slides: IonSlides;
  public address;
  public Time;
  public DeliveryMode;
  public PaymentMode;
  public Days;
  public CurrentIndex = 0;
  slideOpts = {
    effect: "flip",
  };
  public SlideIndex: any = 0;
  selectedTime: any = "6AM - 9AM";
  selectedDeliveryMode: any;
  selectedPaymentMode: any;
  addressvalue: any = [];
  addressList = [];
  selectedDay: any = "Sunday";
  addressArray;
  paymentmode: any;
  storename: any;
  data = [];
  storeid: any;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    public cart: CartService,
    public utils: UtilsServiceService,
    public fireStore: FirestoreService
  ) {
    this.Days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    this.Time = [
      "6AM - 9AM",
      "10AM - 1PM",
      "4PM - 7PM",
      "8PM - 11PM",
      "9AM - 4PM",
    ];
    this.DeliveryMode = ["Deliver", "Pickup", "Curve site"];
    this.PaymentMode = ["Online", "Cash on dlivery", "Pay at store"];
    this.utils.AddAdressBackUrl = "/delivery";

    this.router.queryParams.subscribe((params) => {
      if (params && params.storeid && params.storename) {
        this.storeid = params.storeid;
        this.storename = params.storename;
      }
    });
    this.getAddress();
  }

  getAddress() {
    this.fireStore.getUserAddress().then((address) => {
      address.subscribe((address) => {
        this.addressList = address;
        this.addressvalue = this.addressList[0];
      });
    });
  }
  ngOnInit() {}

  addAddress() {
    this.route.navigate(["add-address"]);
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
  isDeliver: boolean = false;
  isPickup: boolean = false;
  isCurve: boolean = false;
  checkDeliveryMode(deliveryMode) {
    this.isDeliver = false;
    this.isPickup = false;
    this.isCurve = false;
    if (deliveryMode == "Deliver") {
      this.isDeliver = true;
    }
    if (deliveryMode == "Pickup") {
      this.isPickup = true;
    }
    if (deliveryMode == "Curve site") {
      this.isCurve = true;
    }
  }
  itemId: any;
  deliveryAddress: any;
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
      this.selectedDeliveryMode &&
      this.selectedPaymentMode 
    ) {
      if (this.selectedDeliveryMode == "Deliver") {
        if (this.addressvalue) {
          this.deliveryAddress = this.addressvalue;
        } else {
          return this.utils.presentToast(
            "Please add delivery address",
            true,
            "bottom",
            2100
          );
        }
      }
      const getAddress = (address) => {
        try {
          return address.flatNumber || '';
        } catch (err) {
          return '';
        }
      }
      const record = {
        addressvalue: getAddress(this.deliveryAddress || ''),
        selecteddeliverymode: this.selectedDeliveryMode,
        selectedpaymentmode: this.selectedPaymentMode,
        storeid: this.storeid,
        storename: this.storename,
        customerid: this.utils.userInfo.id,
        customername: this.utils.userInfo.username,
        total: this.cart.grandTotal,
        status: "New",
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
        title: "New order request",
        body: "You have ordered",
        token: this.utils.userInfo.id, // it should be customer token
        targetid: this.utils.userInfo.token, // it is customer id
      };

      this.fireStore.sendNotificaion(dataPush);
      this.utils.presentToast(
        "You have ordered successfully",
        true,
        "bottom",
        2100
      );
      this.cart.removeCurrentStore(this.storeid);
      this.route.navigate(["home"]);
    } else {
      this.utils.presentToast(
        "All field is required here",
        true,
        "bottom",
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
