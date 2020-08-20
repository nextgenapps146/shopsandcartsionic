import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/DataServices/data.service';
import { CartService } from '../../services/CartServices/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { StoreProductService } from '../../services/store-product.service';
import { UtilsService } from '../../services/utils.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.page.html',
    styleUrls: ['./product-list.page.scss'],
})

export class ProductListPage implements OnInit {

    storeProductsList: any;
    allProducts;
    qpMap: any;
    storeInfo: any;

    constructor(
        public dataServ: DataService,
        private storeProductService: StoreProductService,
        public cart: CartService,
        private route: Router,
        public fsServices: FirestoreService,
        private activatedRoute: ActivatedRoute,
        private utils: UtilsService
    ) {
        this.storeInfo = this.utils.userShoppingStoreInfo;
        this.qpMap = this.utils.quantitiesAndProductsMap;
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.storeId && params.categoryId) {
                this.getStoreProducts(params.storeId, params.categoryId);
            }
        });
    }

    ngOnInit() {}

    getStoreProducts(storeId, categoryId) {
        this.storeProductService.getStoreProducts(storeId, categoryId).then((data) => {
            data.subscribe(list => {
                this.storeProductsList = list;
            });
        });
    }

    // addToCart(product) {
    //     product.units = 1;
    //     this.cart.addCart.push(product);
    //     this.cart.productQty += 1;
    // }

    // updateCart(productID, type) {
    //     const productunits = this.cart.addCart.find(el => el.id === productID);
    //     if (type === 'add') {
    //         productunits.units += 1;
    //         this.cart.productQty += 1;
    //     }
    //     if (type === 'remove') {
    //         productunits.units -= 1;
    //         this.cart.productQty -= 1;
    //     }

    // }

    // cartPage() {
    //     this.route.navigate(['cart']);
    // }

    viewProduct(product) {
        this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
    }

    handleHeaderEvents(event) {
        if (event.name === 'cart' && this.qpMap['totalCart'] && this.qpMap['totalCart'] > 0) {
            this.route.navigate(['cart']);
        }
    }

    handleProductsEvent(event) {

    }

}
