/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */


import { Component } from '@angular/core';

import { Platform, ModalController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { RateUsPage } from './rate-us/rate-us.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AuthServiceService } from './services/Auth/auth-service.service';
import { FirestoreService } from './services/firestore/firestore.service';
import { UtilsServiceService } from './services/Utils/utils-service.service';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { CartService } from './services/CartServices/cart.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Shop by Category',
            url: '/categories',
            icon: 'apps'
        },
        {
            title: 'Offer Zone',
            url: '/offers',
            icon: 'card'
        },
        {
            title: 'Create Store',
            url: '/create-store',
            icon: 'cube'
        }
    ];

    public otherPages = [
        {
            title: 'Rate Us',
            url: '/rate-us',
            icon: 'star-half',
            mode: 'ios'
        },
        {
            title: 'Share',
            url: '/share',
            icon: 'share',
            mode: 'md'
        },
        {
            title: 'Need Help',
            url: '/need-help',
            icon: 'help-circle-outline',
            mode: 'ios'
        },
        {
            title: 'About Us',
            url: '/about-us',
            icon: 'information-circle-outline',
            mode: 'ios'
        },
        {
            title: 'Log out',
            url: '/login',
            icon: 'log-out',
            mode: 'md'
        }
    ];

    public userDetails: { profileUrl: string, name: string, phoneNo: string, location: any };

    public userPersonalDetails: Array<any>;


    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private route: Router,
        private modalController: ModalController,
        public menuCtrl: MenuController,
        private socialSharing: SocialSharing,
        public authService: AuthServiceService,
        public fireStore: FirestoreService,
        public utils: UtilsServiceService,
        private firebase: FirebaseX
    ) {
        this.initializeApp();
        this.authService.userId.subscribe(filter => {
            if (filter.$uid) {
                this.fireStore.getCurrentUserInfo(filter.$uid).then((data) => {
                    data.subscribe(todos => { });
                });
            }
        });
        this.getUserInAndAround();
        this.userDetails = { profileUrl: 'assets/images/user.png', name: ' Hey John Smith', phoneNo: '+91-000-0000-0000', location: 'jaipur' };
        this.userPersonalDetails = [
            {
                icons: 'assets/images/delivery-truck.png',
                title: 'My Order',
                url: '/order',
                value: 'order'
            },
            {
                icons: 'assets/images/card.png',
                title: 'My Card',
                url: '/my-account',
                value: 'mycard'
            },
            {
                icons: 'assets/images/placeholder.png',
                title: 'My Address',
                url: '/my-account',
                value: 'MyAddress'
            }
        ];
        // CartService.restoreCarts(); We will do it later
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.initPush();
        });
    }

    initPush() {
        this.firebase.getToken().then(token => {
            localStorage.setItem('deviceid', token);
            console.log(`The token is ${token}`);
            alert(token);
            this.fireStore.updateUserDeviceToken();
        });
        this.firebase.onMessageReceived().subscribe(data => {
            alert(data);
            console.log(`FCM message: ${data}`);
        });
    }


    navigatePage(pageUrl, value?) {
        this.menuCtrl.toggle();
        if (pageUrl === '/my-account') {
            this.route.navigate([pageUrl, { title: value }]);
        } else {
            this.route.navigate([pageUrl]);
        }
    }

    userProfile() {
        this.menuCtrl.toggle();
        this.route.navigate(['my-account', { title: 'profile' }]);

    }

    async redirectPage(pageUrl, rateUs) {
        if (pageUrl === '/rate-us') {
            const modal = await this.modalController.create({
                component: RateUsPage,
                cssClass: 'rateUs'
            });
            return await modal.present();
        } else if (pageUrl === '/share') {
            this.socialSharing.share();
        } else {
            this.route.navigate([pageUrl]);
        }
    }

    getUserInAndAround() {
        this.utils.userSearchingCity = localStorage.getItem('usersearchingcity');
    }

    locationPage() {
        this.menuCtrl.toggle();
        this.route.navigate(['location']);

    }
}
