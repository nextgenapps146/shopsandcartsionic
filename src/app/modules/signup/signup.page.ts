import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { UtilsService } from '../../services/utils.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

    email = '';
    password = '';
    confirmPassword = '';
    disableBtn = true;

    constructor(
        public utils: UtilsService,
        private fireStore: FirestoreService,
        private menuCtrl: MenuController,
        private userService: UserService,
        private modalController: ModalController,
        private authServ: AuthServiceService) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.menuCtrl.enable(false, 'start');
        this.menuCtrl.enable(false, 'end');
    }

    onClickCloseModal() {
        this.modalController.dismiss('close');
    }

    // signup() {
    //     if (this.isValidated()) {
    //         this.authServ.createAccount(this.email, this.password).then(
    //             data => {
    //                 this.utils.setUserInfoToLocalStorage(data);
    //                 this.modalController.dismiss('signedin');
    //             }
    //         ).catch(err => {
    //             if (err) {
    //                 this.utils.presentToast(`${err}`, true, 'top', 2100);
    //             }
    //         });
    //     } else {
    //         this.utils.presentToast('Wrong Input/Invalid Details', true, 'bottom', 2100);
    //     }
    // }

    enableSignup(e) {
        const validate = this.isValidated();
        this.disableBtn = !validate;
    }

    isValidated() {
        let validated = false;
        if (this.utils.validateEmail(this.email) && this.password &&
            this.confirmPassword && this.password === this.confirmPassword) {
            validated = true;
        } else {
            validated = false;
        }
        return validated;
    }

}

