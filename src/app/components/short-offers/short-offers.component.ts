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
import { CartService } from 'src/app/services/CartServices/cart.service';
import { DataService } from 'src/app/services/DataServices/data.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'short-offers',
  templateUrl: './short-offers.component.html',
  styleUrls: ['./short-offers.component.scss'],
})
export class ShortOffersComponent implements OnInit {

  public shortOffers;
  constructor(
    public cart: CartService,
    public dataServ: DataService,
    private route: Router,
    private fsServices: FirestoreService
  ) {
    // this.shortOffers  = dataServ.shortOffers[0];
    this.fsServices.getProductsAccordingToTags('Short Time Offers').then((data) => {
      this.shortOffers = data;
    });
  }

  ngOnInit() {}

  seeAllProduct() {
    this.route.navigate(['product-list']);
  }

  addToCart(product) {
    const productunits = this.cart.addCart.find(el => el.id === product.id);
    if (productunits) {
      productunits.units += 1;
      this.cart.productQty += 1;
      product.units = productunits.units;
    } else {
      product.units = 1;
      this.cart.addCart.push(product);
      this.cart.productQty += 1;
    }
  }

  updateCart(productID, type, product) {
    const productunits = this.cart.addCart.find(el => el.id === productID);
    const productIndex = this.cart.addCart.indexOf(el => el.id === productID);
    if (type === 'add') {
      productunits.units += 1;
      this.cart.productQty += 1;
      product.units = productunits.units;
    }
    if (type === 'remove') {
      productunits.units -= 1;
      this.cart.productQty -= 1;
      product.units = productunits.units;
      if (product.units === 0) {
        this.cart.addCart.splice(productIndex, 1);
      }
    }
  }

  viewProduct(product) {
    this.route.navigate(['view-product', {product: JSON.stringify(product)}]);
  }

}
