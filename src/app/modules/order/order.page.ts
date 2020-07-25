import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/ProductService/products.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { UtilsService } from '../../services/utils.service';
import { OrderService } from '../../services/order.service';

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
        public utils: UtilsService,
        private orderService: OrderService,
        private route: Router) {

        this.orderService.getUserOrders(this.utils.userInfo.id).then((orders) => {
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
