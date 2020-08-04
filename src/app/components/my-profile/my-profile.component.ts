import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { UserService } from '../../services/user.service';


@Component({
    selector: 'my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss'],
})

export class MyProfileComponent implements OnInit {

    firstname: string;
    lastname: string;
    phone: any;
    enableBtn = false;
    userInfo: any;

    constructor(
        public utils: UtilsService,
        private userService: UserService) {
            this.firstname = this.utils.userInfo.firstname;
            this.lastname = this.utils.userInfo.lastname;
            this.phone = this.utils.userInfo.phone;
    }

    ngOnInit() { }

    Continue() {
        if (this.utils.userInfo.email) {
            this.userInfo = {
                firstname: this.firstname,
                lastname: this.lastname,
                phone: this.phone
            };
            this.userService.updateUser(this.utils.userInfo.id, Object.assign({}, this.userInfo));
        }
    }

    enableContinue(event) {
        if (this.firstname !== this.utils.userInfo.firstname ||
            this.lastname !== this.utils.userInfo.lastname ||
            this.phone !== this.utils.userInfo.phone) {
            this.enableBtn = true;
        } else {
            this.enableBtn = false;
        }
    }
}
