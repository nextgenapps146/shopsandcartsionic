import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
    selector: 'app-order-items',
    templateUrl: './order-items.page.html',
    styleUrls: ['./order-items.page.scss'],
})

export class OrderItemsPage implements OnInit {

    itemid: any;
    items = [];

    constructor(private route: ActivatedRoute, private orderService: OrderService) {
        this.loadItem();
    }

    ngOnInit() {
    }

    loadItem() {
        this.route.queryParams.subscribe((params) => {
            if (params && params.itemid) {
                this.itemid = params.itemid;

                this.orderService.getOrdersItem(this.itemid).then((items) => {
                    items.subscribe(items => {
                        this.items = items;

                    });
                });
            }
        });
    }

}
