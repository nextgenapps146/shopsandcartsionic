import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

    @Input()
    list: Array<any>;

    @Output()
    categoriesEvent: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    rightArrowClick(item) {
        this.categoriesEvent.emit({ name: 'arrow-right', type: 'click', item });
    }

}
