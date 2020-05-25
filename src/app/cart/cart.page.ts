/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */

import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/DataServices/data.service";
import { CartService } from "../services/CartServices/cart.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"],
})
export class CartPage implements OnInit {
  storeid: any;
  storename: any;
  constructor(
    public dataServ: DataService,
    public cart: CartService,
    public route: Router,
    public router: ActivatedRoute,
    public alertController: AlertController
  ) {
    this.router.queryParams.subscribe((params) => {
      if (params && params.storeid && params.storename) {
        this.storeid = params.storeid;
        this.storename = params.storename;
        this.cart.setCurrentStore(this.storeid);
        this.addCart();
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

  ngOnInit() {
    this.addCart();
  }

  startShopping() {
    this.route.navigate(["home"]);
  }

  updateCart(productID, type) {
    const productunits = this.cart.addCart.find((el) => el.id === productID);
    let id;

    if (type === "add") {
      productunits.units += 1;
      this.cart.productQty += 1;
      const total = 1 * productunits.salePrice;
      this.cart.subTotal = this.cart.subTotal + total;
      this.cart.grandTotal = this.cart.subTotal + this.cart.deliveryCharge;

    }

    if (type === "remove") {
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
  }

  async removeProduct(productID, index, productUnit?) {
    const alert = await this.alertController.create({
      header: 'Remove From Cart!',
      message: "Are you Sure you want to remove this Product",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (cancel) => { },
        },
        {
          text: "Remove",
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

  deliveryAddress() {
    const navigationExtras = {
      queryParams: {
        storeid: this.storeid,
        storename: this.storename,
      },
    };
    this.route.navigate(["delivery"], navigationExtras);
  }
}
