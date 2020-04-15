/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 public addCart: Array<any>;
 public subTotal;
 public deliveryCharge;
 public totalSave;
 public grandTotal;
 public productQty = 0;
 public orderComplete: Array<any>;

  constructor() {
    this.addCart = [];
    this.subTotal = 0;
    this.grandTotal = 0;
    this.orderComplete = [];
   }
}
