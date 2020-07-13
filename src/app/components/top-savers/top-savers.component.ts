import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/DataServices/data.service';
import { CartService } from 'src/app/services/CartServices/cart.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'top-savers',
  templateUrl: './top-savers.component.html',
  styleUrls: ['./top-savers.component.scss'],
})
export class TopSaversComponent implements OnInit {
  public topSavers;


  constructor(
    public dataServ: DataService,
    public cart: CartService,
    private route: Router,
    private fsServices: FirestoreService
  ) {
    // this.topSavers = dataServ.topSaversproduct[0];
    this.fsServices.getProductsAccordingToTags('Top Savers Today').then((data) => {
      this.topSavers = data;
    });
  }

  ngOnInit() { }

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
    this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
  }


}
