import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { RateUsPage } from './modules/rate-us/rate-us.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AuthServiceService } from './services/auth-service.service';
import { FirestoreService } from './services/firestore/firestore.service';
import { UtilsService } from './services/utils.service';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { UserService } from './services/user.service';
import { LoginPage } from './modules/login/login.page';
import { SignupPage } from './modules/signup/signup.page';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

    uid: string;
    userEmail: string;

    user: Observable<any>;

    public appPages = this.utils.getAppPages();
    public otherPages = this.utils.getOtherPages();
    public userPersonalDetails: Array<any>;

    constructor(
        private fireAuth: AngularFireAuth,
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
        // this.authService.userId.subscribe(filter => {
        //     if (filter.$uid) {
        //         this.getCurrentUserInfo(filter.$uid);
        //     }
        // });
        this.user = this.fireAuth.authState;
        this.uid = localStorage.getItem('uid');
    }

    ngOnInit() {
        if (this.uid) {
            this.getUserInfoFromStorage({ uid: this.uid });
        } else {
            this.user.subscribe(result => {
                if (result && result.uid) {
                    this.uid = result.uid;
                    this.utils.userInfo.id = result.uid;
                    this.utils.userInfo.email = result.email;
                    localStorage.setItem('uid', result.uid);
                    this.getUserInfoFromStorage(result);
                }
            });
        }
        this.utils.userShoppingCity = localStorage.getItem('shoppingCity');
        this.getUserInfoFromStorage(null);
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
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

    userProfile() {
        this.menuCtrl.toggle();
        if (this.utils.userInfo.email === '') {
            this.login();
        } else {
            this.route.navigate(['my-account', { title: 'profile' }]);
        }
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
        } else if (pageUrl === '/logout') {
            this.authService.logout();
            setTimeout(v => {
                window.location.href = window.location.href;
            }, 1000);
        } else {
            this.route.navigate([pageUrl]);
        }
    }

    getUserInfoFromStorage(result) {
        if (result && result.uid) {
            const userInfokey = result.uid + 'info';
            this.utils.userInfo = JSON.parse(localStorage.getItem(userInfokey)) || this.utils.userInfo;
        }
        this.route.navigate(['/home']);
    }

    async login() {
        const modal = await this.modalController.create({
            component: LoginPage
        });
        modal.onDidDismiss().then((res) => {
            if (res && res.data === 'signup') {
                // this.signup();
            }
        });
        return await modal.present();
    }

    // async signup() {
    //     const modal = await this.modalController.create({
    //         component: SignupPage
    //     });
    //     modal.onDidDismiss().then((res) => {
    //         if (res && res.data === 'login') {
    //             this.signup();
    //         }
    //     });
    //     return await modal.present();
    // }

    // locationPage() {
    //     this.menuCtrl.toggle();
    //     this.route.navigate(['location']);
    // }

    // navigatePage(pageUrl, value?) {
    //     this.menuCtrl.toggle();
    //     if (pageUrl === '/my-account') {
    //         this.route.navigate([pageUrl, { title: value }]);
    //     } else {
    //         this.route.navigate([pageUrl]);
    //     }
    // }

    // Enable Later ---
    // getCurrentUserInfo(id) {
    //     this.userService.updateMyDeviceToken(id);
    //     this.userService.getUserInfo(id).then((data) => {
    //         data.subscribe(result => {
    //             if (result.id) {
    //                 this.utils.userInfo = result;
    //             }
    //         });
    //     });
    // }
}
