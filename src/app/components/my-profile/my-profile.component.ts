import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { FirestoreService } from '../../services/firestore/firestore.service';


@Component({
    selector: 'my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss'],
})

export class MyProfileComponent implements OnInit {

    public toggle: boolean;
    public btnColor;
    userInfo: any = {};

    constructor(public utils: UtilsService, public fireStore: FirestoreService) {
        this.userInfo = Object.assign({}, this.utils.userInfo);
    }

    ngOnInit() { }

    Continue() {
        if (this.userInfo.username && this.userInfo.phoneNumber && this.userInfo.gender) {
            this.fireStore.updateUser(this.userInfo.id, Object.assign({}, this.userInfo));
        } else {
            this.utils.presentToast('All field is required here', true, 'bottom', 2100);
        }
    }
}
