import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { UserService } from '../../services/user.service';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email = '';
    user: any;

    constructor(
        private utils: UtilsService,
        private modalController: ModalController,
        private authService: AuthServiceService) {
    }

    ngOnInit() {}

    ionViewDidEnter() {}

    login() {
        if (this.utils.validateEmail(this.email)) {
            this.utils.openLoader();
            this.authService.login(this.email).then(el => this.utils.closeLoading());
        } else {
            this.utils.presentToast('Please enter a valid email', true, 'bottom', 3000);
        }
    }

    onClickCloseModal() {
        this.modalController.dismiss('close');
    }

}
