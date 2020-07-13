import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/ProductService/products.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { UtilsService } from '../../services/utils.service';

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
        public util: UtilsService,
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
        const navigationExtras = {
            queryParams: {
                itemid: item.id,
            }
        };
        this.route.navigate(['order-items'], navigationExtras);
    }
}
