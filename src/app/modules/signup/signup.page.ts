import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UtilsService } from '../../services/utils.service';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { UserService } from '../../services/user.service';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    first_name = '';
    last_name = '';
    email = '';
    password = '';

    constructor(
        public util: UtilsService,
        private fireStore: FirestoreService,
        private menuCtrl: MenuController,
        private userService: UserService,
        private authServ: AuthServiceService) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.menuCtrl.enable(false, 'start');
        this.menuCtrl.enable(false, 'end');
    }

    signup() {
        if (this.first_name !== '' && this.email !== '' && this.password !== '' && this.util.validateEmail(this.email)) {
            this.authServ.createAccount(this.email, this.password, this.first_name).then(
                data => {
                    this.userService.updateMyDeviceToken(data.id);
                    this.util.presentToast('Thanks for Signup', true, 'bottom', 2100);

                    this.util.navigate('', false);
                }
            ).catch(err => {
                if (err) {
                    this.util.presentToast(`${err}`, true, 'bottom', 2100);

                }
            });
        } else {
            this.util.presentToast('Wrong Input/Invalid Details', true, 'bottom', 2100);
        }
    }

}

