import { Component, OnInit } from '@angular/core';
import { MenuController, Platform, AlertController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { UtilsService } from '../../services/utils.service';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { IfStmt } from '@angular/compiler';
import { LoadingController } from '@ionic/angular';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email = '';
    password = '';

    constructor(
        private platform: Platform,
        public loadingController: LoadingController,
        private fireStore: FirestoreService,
        public alertController: AlertController,
        private splashScreen: SplashScreen,
        public utils: UtilsService,
        private menuCtrl: MenuController,
        private userService: UserService,
        private modalController: ModalController,
        private authServ: AuthServiceService) {
    }

    ngOnInit() {}

    ionViewDidEnter() {
        this.menuCtrl.enable(false, 'start');
        this.menuCtrl.enable(false, 'end');
        this.splashScreen.hide();
    }

    onClickCloseModal() {
        this.modalController.dismiss('close');
    }

    login() {
        if (this.utils.validateEmail(this.email) && this.password !== '') {
            this.utils.openLoader();
            this.authServ.login(this.email, this.password).then(
                data => {
                    this.utils.setUserInfoToLocalStorage(data);
                    this.modalController.dismiss('loggedin');
                }
            ).catch(err => {
                if (err) {
                    this.utils.presentToast(`${err}`, true, 'bottom', 2100);
                }
            }).then(el => this.utils.closeLoading());
        } else {
            this.utils.presentToast('Please enter email and password', true, 'bottom', 2100);
        }
    }

    async forgotPassword() {
        const alert = await this.alertController.create({
            header: 'Reset Email',
            backdropDismiss: false,
            inputs: [
                {
                    name: 'name1',
                    type: 'email',
                    placeholder: 'Enter your email',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (res) => {

                    }
                }, {
                    text: 'Ok',
                    handler: (res) => {
                        const value = this.utils.validateEmail(res.name1);
                        this.authServ.forgotPassoword(res.name1);
                        return value;

                    }
                }
            ]
        });

        await alert.present();
    }

}
