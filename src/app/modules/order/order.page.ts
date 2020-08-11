import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/ProductService/products.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { UtilsService } from '../../services/utils.service';
import { OrderService } from '../../services/order.service';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-order',
    templateUrl: './order.page.html',
    styleUrls: ['./order.page.scss'],
})

export class OrderPage implements OnInit {

    savedOrders: any;
    allOrders = [];
    ordersFromDb: any;
    isUpdateRequired: boolean;

    constructor(
        public products: ProductsService,
        public fsServices: FirestoreService,
        public utils: UtilsService,
        private orderService: OrderService,
        private route: Router) {
            this.getAllOrders();
        // this.orderService.getSavedOrders(this.utils.userInfo.id).then((orders) => {
        //     orders.subscribe(list => {
        //         this.orders = list;
        //     });
        // });
    }

    ngOnInit() {
    }

    getAllOrders() {
        const savedOrdersFromStorage = this.orderService.getSavedOrders(this.utils.userInfo.id);
        if (savedOrdersFromStorage && savedOrdersFromStorage.orders) {
            this.savedOrders = savedOrdersFromStorage.orders;
            this.isUpdateRequired = savedOrdersFromStorage.isUpdateRequired;
            if (this.isUpdateRequired) {
                this.getOrdersUpdateFromDb();
            } else {
                this.allOrders = this.savedOrders;
            }

        }
    }

    getOrdersUpdateFromDb() {
        this.orderService.getUserOrders(this.utils.userInfo.id).then((orders) => {
            orders.subscribe(list => {
                this.ordersFromDb = list;
                this.processAllOrders();
            });
        });
    }

    processAllOrders() {
        let upReq = false;
        this.ordersFromDb.forEach(element => {
            for (let i = 0; i < this.savedOrders.length; i++) {
                if (element.id === this.savedOrders[i].id) {
                    this.savedOrders[i] = element;
                    if (element.deliverystatus === 'nd') {
                        // the db order has not changed yet - order is not delivered yet
                        upReq = true;
                    }
                }
            }
        });
        this.isUpdateRequired = upReq;
        this.allOrders = this.savedOrders;
        this.orderService.saveAllOrdersToStorage(this.utils.userInfo.id,
            { orders: this.allOrders, isUpdateRequired: this.isUpdateRequired });
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
