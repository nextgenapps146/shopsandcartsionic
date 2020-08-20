import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/DataServices/data.service';
import { CartService } from '../../services/CartServices/cart.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'popular-deals',
  templateUrl: './popular-deals.component.html',
  styleUrls: ['./popular-deals.component.scss'],
})
export class PopularDealsComponent implements OnInit {
 public popularDeals;
  constructor(
    public dataServ: DataService,
    public cart: CartService,
    private route: Router,
    private fsServices: FirestoreService
  ) {
    this.fsServices.getProductsAccordingToTags('Popular Deals').then((data) => {
      this.popularDeals = data;
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
