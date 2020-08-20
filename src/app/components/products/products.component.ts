import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})

export class ProductsComponent implements OnInit {

    @Input()
    list: Array<any>;

    @Input()
    showAddToCartBtn: boolean;

    @Output()
    productsEvent: EventEmitter<any> = new EventEmitter();

    qpMap = {};

    constructor(private utils: UtilsService) { }

    ngOnInit() {
        this.qpMap = this.utils.quantitiesAndProductsMap;
    }

    addToStoreBtnClick(item) {
        const info = { ...item, orderQuantity: 1 };
        this.qpMap[item.id] = info;
        this.qpMap['totalCart'] = this.qpMap['totalCart'] ? this.qpMap['totalCart'] + 1 : 1;
        this.productsEvent.emit({ name: 'add-cart', type: 'click', item });
    }

    addToStorePlusBtnClick(item) {
        this.qpMap[item.id].orderQuantity = this.qpMap[item.id].orderQuantity + 1;
        this.qpMap['totalCart'] = this.qpMap['totalCart'] + 1;
        this.productsEvent.emit({ name: 'add-cart-plus', type: 'click', item });
    }

    addToStoreMinusBtnClick(item) {
        if (this.qpMap[item.id].orderQuantity === 1) {
            delete this.qpMap[item.id];
        } else {
            this.qpMap[item.id].orderQuantity = this.qpMap[item.id].orderQuantity - 1;
        }
        this.qpMap['totalCart'] = this.qpMap['totalCart'] - 1;
        this.productsEvent.emit({ name: 'add-cart-minus', type: 'click', item });
    }

    handleItemClick(item) {
        this.productsEvent.emit({ name: 'item', type: 'click', item });
    }

}
