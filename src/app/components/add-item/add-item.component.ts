import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    selector: 'add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss'],
})

export class AddItemComponent implements OnInit {

    // @Input()
    // quantity: number;

    @Input()
    item: any;

    @Output()
    addItemEvent: EventEmitter<any> = new EventEmitter();

    quantity: number;
    qpMap = {};
    // currentItem: any;

    constructor(private utils: UtilsService) { }

    ngOnInit() {
        this.qpMap = this.utils.quantitiesAndProductsMap;
        this.quantity = this.qpMap[this.item.id] && this.qpMap[this.item.id].orderQuantity ? this.qpMap[this.item.id].orderQuantity : 0;
    }

    addBtnClick() {
        if (this.qpMap[this.item.id] && this.qpMap[this.item.id].orderQuantity > 0) {
            this.handleAddItem({ name: 'enable-add'});
        } else {
            this.handleAddItem({ name: 'add'});
        }
    }

    plusBtnClick() {
        this.handleAddItem({ name: 'plus'});
    }

    minusBtnClick() {
        this.handleAddItem({ name: 'minus'});
    }

    deleteBtnClick() {
        this.handleAddItem({ name: 'delete'});
    }

    handleAddItem(event) {
        this.utils.handleOverlay(this.item);
        switch (event.name) {
            case 'add':
                this.handleAdd();
                break;
            case 'plus':
                this.handlePlus();
                break;
            case 'minus':
                this.handleMinus();
                break;
            case 'delete':
                this.handleDelete();
                break;
        }
        this.addItemEvent.emit(event);
    }

    handleAdd() {
        const info = { ...this.item, orderQuantity: 1 };
        this.qpMap[this.item.id] = info;
        this.quantity = this.qpMap[this.item.id].orderQuantity;
        this.qpMap['totalCart'] = this.qpMap['totalCart'] ? this.qpMap['totalCart'] + 1 : 1;
    }

    handlePlus() {
        this.qpMap[this.item.id].orderQuantity = this.qpMap[this.item.id].orderQuantity + 1;
        this.quantity = this.qpMap[this.item.id].orderQuantity;
        this.qpMap['totalCart'] = this.qpMap['totalCart'] + 1;
    }

    handleMinus() {
        this.qpMap[this.item.id].orderQuantity = this.qpMap[this.item.id].orderQuantity - 1;
        this.quantity = this.qpMap[this.item.id].orderQuantity;
        this.qpMap['totalCart'] = this.qpMap['totalCart'] - 1;
    }

    handleDelete() {
        delete this.qpMap[this.item.id];
        this.qpMap['totalCart'] = this.qpMap['totalCart'] - 1;
        this.quantity = 0;
        // this.productsEvent.emit({ name: 'delete', type: 'click', item });
        this.utils.handleOverlayClick(this.item);
    }

}
