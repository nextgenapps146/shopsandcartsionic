import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    @Input()
    page: string;

    @Input()
    title: string;

    @Output()
    headerEvent: EventEmitter<any> = new EventEmitter();

    @Input()
    showMoreIcon: boolean;

    @Input()
    showChatIcon: boolean;

    @Input()
    showOrdersIcon: boolean;

    @Input()
    showBackButton: boolean;

    constructor(
        private menuCtrl: MenuController,
        private navCtrl: NavController) {
    }

    ngOnInit() {}

    openFirst() {
        this.menuCtrl.enable(true, 'first');
        this.menuCtrl.open('first');
    }

    goBack() {
        this.navCtrl.pop();
    }

    moreIconClick() {
        this.headerEvent.emit({ name: 'more', type: 'click' });
    }

    chatIconClick() {
        this.headerEvent.emit({ name: 'chat', type: 'click' });
    }

    ordersIconClick() {
        this.headerEvent.emit({ name: 'orders', type: 'click' });
    }

}
