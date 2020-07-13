import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})

export class ProductsComponent implements OnInit {

    @Input()
    list: Array<any>;

    @Input()
    showAddToStoreBtn: boolean;

    @Output()
    productsEvent: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    addToStoreBtnClick(item) {
        this.productsEvent.emit({ name: 'add-store-btn', type: 'click', item });
    }

    handleItemClick(item) {
        this.productsEvent.emit({ name: 'item', type: 'click', item });
    }

}
