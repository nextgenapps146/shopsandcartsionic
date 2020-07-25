import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { UserService } from '../../services/user.service';


@Component({
    selector: 'my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss'],
})

export class MyProfileComponent implements OnInit {

    userInfo: any = {};
    enableBtn = false;

    constructor(
        public utils: UtilsService,
        private userService: UserService) {
        this.userInfo = Object.assign({}, this.utils.userInfo);
    }

    ngOnInit() { }

    Continue() {
        if (this.userInfo.username && this.userInfo.email) {
            if (this.userInfo.name !== this.utils.userInfo.name ||
                this.userInfo.phone !== this.utils.userInfo.phoneNumber) {
                this.userService.updateUser(this.userInfo.id, Object.assign({}, this.userInfo));
            }
        } else {
            this.utils.presentToast('All field is required here', true, 'bottom', 2100);
        }
    }

    enableContinue() {
        if (this.userInfo.name !== this.utils.userInfo.name ||
            this.userInfo.phone !== this.utils.userInfo.phoneNumber) {
            this.enableBtn = true;
        }
    }
}
