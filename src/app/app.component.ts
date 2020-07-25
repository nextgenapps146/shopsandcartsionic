import { Component } from '@angular/core';
import { Platform, ModalController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { RateUsPage } from './modules/rate-us/rate-us.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AuthServiceService } from './services/Auth/auth-service.service';
import { FirestoreService } from './services/firestore/firestore.service';
import { UtilsService } from './services/utils.service';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { CartService } from './services/CartServices/cart.service';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})

export class AppComponent {

    public appPages = this.utils.getAppPages();
    public otherPages = this.utils.getOtherPages();
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
        public utils: UtilsService,
        private firebase: FirebaseX,
        private userService: UserService
    ) {
        this.initializeApp();
        this.authService.userId.subscribe(filter => {
            if (filter.$uid) {
                this.getCurrentUserInfo(filter.$uid);
            }
        });
        this.getUserShoppingCity();
        // this.userDetails = {
        //     profileUrl: 'assets/images/user.png',
        //     name: ' Hey John Smith',
        //     phoneNo: '+91-000-0000-0000',
        //     location: 'jaipur'
        // };
        // this.userPersonalDetails = [
        //     {
        //         icons: 'assets/images/delivery-truck.png',
        //         title: 'My Order',
        //         url: '/order',
        //         value: 'order'
        //     },
        //     {
        //         icons: 'assets/images/card.png',
        //         title: 'My Card',
        //         url: '/my-account',
        //         value: 'mycard'
        //     },
        //     {
        //         icons: 'assets/images/placeholder.png',
        //         title: 'My Address',
        //         url: '/my-account',
        //         value: 'MyAddress'
        //     }
        // ];
        // CartService.restoreCarts(); We will do it later
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    getCurrentUserInfo(id) {
        this.userService.updateMyDeviceToken(id);
        this.userService.getUserInfo(id).then((data) => {
            data.subscribe(result => {
                if (result.id) {
                    this.utils.userInfo = result;
                    this.utils.userInfo.profileimage = 'assets/images/user.png'; // temporary

                    // update only if its device - check for is device
                    this.userService.updateMyDeviceToken(id);
                    this.initPush(id);
                } else {
                    // Navigate back to login screen -- something went wrong here
                }
            });
        });
    }

    // what does this method do?
    initPush(id) {
        this.firebase.getToken().then(token => {
            localStorage.setItem('deviceid', token);
            this.userService.updateMyDeviceToken(id);
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

    getUserShoppingCity() {
        this.utils.userShoppingCity = localStorage.getItem('shoppingCity');
    }

    locationPage() {
        this.menuCtrl.toggle();
        this.route.navigate(['location']);
    }
}
