import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuController, NavController, ModalController } from '@ionic/angular';
import { LoginPage } from '../../modules/login/login.page';
import { SignupPage } from '../../modules/signup/signup.page';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';

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

    @Input()
    toolbar2: string;

    @Input()
    segmentItems: Array<object>;

    @Input()
    activeSegment: string;

    @Output()
    headerEvent: EventEmitter<any> = new EventEmitter();

    @Input()
    showMoreIcon: boolean;

    @Input()
    showChatIcon: boolean;

    @Input()
    showMessageIcon: boolean;

    @Input()
    showCartIcon: boolean;

    @Input()
    cartBadge: number;

    @Input()
    showOrdersIcon: boolean;

    @Input()
    leftTopButton: string;

    @Input()
    textRight: string;

    segmentWidth: number;

    constructor(
        private menuCtrl: MenuController,
        private route: Router,
        private modalController: ModalController,
        private utils: UtilsService,
        private navCtrl: NavController) {
    }

    ngOnInit() {
        if (this.segmentItems && this.segmentItems.length > 0) {
            this.segmentWidth = 100 / this.segmentItems.length;
        }
    }

    openFirst() {
        this.menuCtrl.enable(true, 'first');
        this.menuCtrl.open('first');
    }

    goBack() {
        this.navCtrl.pop();
    }

    close() {
        this.headerEvent.emit({ name: 'close', type: 'click' });
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

    titleClick() {
        this.headerEvent.emit({ name: 'title', type: 'click' });
    }

    segmentClick(item) {
        this.headerEvent.emit({ name: item, type: 'segment' });
    }

    messageIconClick() {
        this.checkPromtLogin({ name: 'message', type: 'click' });
    }

    cartIconClick() {
        if (this.page === 'delivery') {
            this.checkPromtLogin({ name: 'cart', type: 'click' });
        } else {
            this.headerEvent.emit({ name: 'cart', type: 'click' });
        }
    }

    searchPage(value) {
        this.headerEvent.emit({ name: 'search', type: 'enter', item: value });
    }

    searchClear() {
        this.headerEvent.emit({ name: 'search-clear', type: 'clear' });
    }

    checkPromtLogin(eventObject) {
        if (!this.utils.userInfo.email) {
            this.login(eventObject);
        } else {
            this.headerEvent.emit(eventObject);
        }
    }

    async login(eventObject) {
        const modal = await this.modalController.create({
            component: LoginPage
        });
        modal.onDidDismiss().then((res) => {
            if (res) {
                if (res.data === 'signup') {
                    this.signup(eventObject);
                } else if (res.data === 'loggedin' || res.data === 'signedin') {
                    this.checkPromtLogin(eventObject);
                }
            }
        });
        return await modal.present();
    }

    async signup(eventObject) {
        const modal = await this.modalController.create({
            component: SignupPage
        });
        modal.onDidDismiss().then((res) => {
            if (res) {
                if (res.data === 'login') {
                    this.signup(eventObject);
                } else if (res.data === 'loggedin' || res.data === 'signedin') {
                    this.checkPromtLogin(eventObject);
                }
            }
        });
        return await modal.present();
    }

}
