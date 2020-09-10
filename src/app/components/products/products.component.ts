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

    constructor(private utils: UtilsService) { }

    ngOnInit() {}

    handleItemClick(item) {
        this.utils.handleOverlayClick(this.utils.currentAddedItem);
        this.productsEvent.emit({ name: 'item', type: 'click', item });
    }

}
