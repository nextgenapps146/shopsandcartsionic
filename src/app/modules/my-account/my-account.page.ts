import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/CartServices/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.page.html',
    styleUrls: ['./my-account.page.scss'],
})

export class MyAccountPage implements OnInit {
    selectSegment;
    userDetails;
    profileUrl;
    segmentItems = [
        { title: 'Profile', active: true },
        { title: 'Card' },
        { title: 'Address' }
    ];
    activeSegment = 'Profile';

    constructor(
        public cart: CartService,
        private activeRoute: ActivatedRoute,
        private route: Router,
        public utils: UtilsService
    ) {
        // this.userDetails = { profileUrl: 'assets/images/user.png', name: 'John Doe', phoneNo: '+91-000-0000-0000', location: 'jaipur' };
        this.userDetails = this.utils.userInfo;
        this.activeRoute.params.subscribe((res) => {
            this.selectSegment = res.title;
        });
        this.profileUrl = 'assets/images/user.png';
        this.utils.AddAdressBackUrl = '/my-account';
    }

    ngOnInit() {
    }

    editProfile() {
        this.selectSegment = 'profile';
    }
    cartPage() {
        this.route.navigate(['cart']);
    }

    handleHeaderEvents(event) {
        if (event.type === 'segment') {
            this.activeSegment = event.name.title;
        }
    }

}
