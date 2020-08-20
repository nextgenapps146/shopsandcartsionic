import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/DataServices/data.service';
import { CartService } from '../../services/CartServices/cart.service';
import { ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {
  public product: any;
  public heartToggle: boolean;
  public quantityList: Array<any>;
  public selectedQty;
  public customPopoverOptions: any = {
  };

  constructor(
    private activeRoute: ActivatedRoute,
    public dataServ: DataService,
    public cart: CartService,
    private toastCtrl: ToastController,
    private route: Router,
    private socialSharing: SocialSharing
  ) {
    this.quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    this.activeRoute.params.subscribe((params: any) => {
      this.product = JSON.parse(params.product);
    });

    this.heartToggle = false;
  }

  ngOnInit() {
  }

  shareProduct() {
    this.socialSharing.share('https://store.enappd.com');
  }

  favoriteProduct() {
    this.heartToggle = !this.heartToggle;
    if (this.heartToggle) {
      this.favoriteDone();
    }
    if (!this.heartToggle) {
      this.favoriteRemove();
    }
  }

  addQty() {
  }

  cartPage() {
    this.route.navigate(['cart']);
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

  addtoCart() {
    const productunits = this.cart.addCart.find(el => el.id === this.product.id);
    this.product.units = this.selectedQty;
    if (this.selectedQty > 0 && !productunits) {
      this.cart.productQty += this.product.units;
      this.cart.addCart.push(this.product);
    } else if (this.selectedQty > 0) {
      this.cart.productQty -= productunits.units;
      productunits.units = this.selectedQty;
      this.cart.productQty += this.selectedQty;
    }
  }

  buyNow() {
    this.product.units = this.selectedQty;
    if (this.selectedQty > 0) {
      this.cart.productQty = this.product.units;
      this.cart.addCart.push(this.product);
    }
    this.route.navigate(['cart']);
  }

  updateCart(productID, type) {
    const productunits = this.cart.addCart.find(el => el.id === productID);
    if (type === 'add') {
      productunits.units += 1;
      this.cart.productQty += 1;
    }
    if (type === 'remove') {
      productunits.units -= 1;
      this.cart.productQty -= 1;
    }
  }
}
