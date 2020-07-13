
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/DataServices/data.service';
import { CartService } from 'src/app/services/CartServices/cart.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'similar-product',
  templateUrl: './similar-product.component.html',
  styleUrls: ['./similar-product.component.scss'],
})
export class SimilarProductComponent implements OnInit {
  public similarProduct;
  public heartToggle: boolean;


  constructor(
    public dataServ: DataService,
    public cart: CartService,
    private route: Router,
    private toastCtrl: ToastController,
  ) {
    this.similarProduct = dataServ.similarProducts[0];
    this.similarProduct.products.map((ele) => ele.checked = false);
  }

  ngOnInit() { }

  viewProduct(product) {
    this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
  }

  shareProduct() {
  }

  favoriteProduct(index) {
    this.heartToggle = !this.heartToggle;
    this.similarProduct.products[index].checked = !this.similarProduct.products[index].checked;
    if (this.similarProduct.products[index].checked) {
      this.favoriteDone();
    }
    if (!this.similarProduct.products[index].checked) {
      this.favoriteRemove();
    }
  }

  async favoriteDone() {
    const toast = await this.toastCtrl.create({
      message: 'Add Favorite Product',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  async favoriteRemove() {
    const toast = await this.toastCtrl.create({
      message: 'Remove Favorite Product',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  seeAllProduct() {
    this.route.navigate(['product-list']);
  }

}
