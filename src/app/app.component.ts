import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, MenuController, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AuthServiceService } from './services/auth-service.service';
import { FirestoreService } from './services/firestore/firestore.service';
import { UtilsService } from './services/utils.service';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { UserService } from './services/user.service';
// import { LoginPage } from './modules/login/login.page';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

    // uid: string;
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
        public popoverController: PopoverController,
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
        // this.user = this.fireAuth.authState;
        this.utils.uid = localStorage.getItem('uid');
    }

    ngOnInit() {
        if (this.utils.uid) {
            this.getUserInfoFromStorage(this.utils.uid);
        }
        this.utils.userShoppingCity = localStorage.getItem('shoppingCity');
        // if (this.uid) {
        //     this.getUserInfoFromStorage({ uid: this.uid });
        // } else {
        //     this.user.subscribe(result => {
        //         if (result && result.uid) {
        //             this.uid = result.uid;
        //             this.utils.userInfo.id = result.uid;
        //             this.utils.userInfo.email = result.email;
        //             localStorage.setItem('uid', result.uid);
        //             this.getUserInfoFromStorage(result);
        //         }
        //     });
        // }
        // this.utils.userShoppingCity = localStorage.getItem('shoppingCity');
        // this.getUserInfoFromStorage(null);
        // this.initializeApp();
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
        if (!this.utils.userInfo || this.utils.userInfo.email === '') {
            this.presentLogin(null);
        } else {
            this.route.navigate(['my-account', { title: 'profile' }]);
        }
    }

    redirectPage(pageUrl) {
        if (pageUrl === '/share') {
            this.socialSharing.share();
        } else if (pageUrl === '/create-store') {
            if (this.utils.uid) {
                this.route.navigate([pageUrl]);
            } else {
                // this.login();
            }
        } else if (pageUrl === '/logout') {
            localStorage.removeItem('uid');
            this.fireAuth.auth.signOut();
            setTimeout(v => {
                window.location.href = window.location.href;
            }, 1000);
        } else {
            this.route.navigate([pageUrl]);
        }
    }

    getUserInfoFromStorage(uid) {
        if (uid) {
            const userInfokey = uid + 'info';
            this.utils.userInfo = JSON.parse(localStorage.getItem(userInfokey)) || this.utils.userInfo;
        }
    }

    async presentLogin(event: any) {
        const popover = await this.popoverController.create({
          component: LoginComponent,
          event: event,
          showBackdrop: true,
          backdropDismiss: true
        });

        popover.onDidDismiss().then((dataReturned) => {
            // const email = dataReturned.data;
            // this.utils.openLoader();
            // this.authService.login(email).then(el => this.utils.closeLoading());
        });

        return await popover.present();
    }

    // async login() {
    //     const modal = await this.modalController.create({
    //         component: LoginPage
    //     });
    //     modal.onDidDismiss().then((res) => {
    //         if (res && res.data === 'signup') {
    //             // this.signup();
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
