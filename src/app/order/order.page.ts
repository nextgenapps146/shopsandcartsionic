/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */




import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/ProductService/products.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore/firestore.service';
import { UtilsServiceService } from '../services/Utils/utils-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  public orders;
  constructor(
    public products: ProductsService,
    public fsServices: FirestoreService,
    public util: UtilsServiceService,
    private route: Router) {

    this.fsServices.getUserOrders().then((orders) => {
      orders.subscribe(list => {
        this.orders = list;
      });
    });
  }

  ngOnInit() {
  }

  startShopping() {
    this.route.navigate(['home']);
  }

  onOrderItem(item) {
    debugger
    let navigationExtras = {
      queryParams: {
        itemid: item.id,
      }
    };
    this.route.navigate(['order-items'], navigationExtras);
  }
}
