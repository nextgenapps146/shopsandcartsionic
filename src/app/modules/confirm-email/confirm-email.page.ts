import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../../services/user.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-confirm-email',
    templateUrl: './confirm-email.page.html',
    styleUrls: ['./confirm-email.page.scss'],
})

export class ConfirmEmailPage implements OnInit {

    emailVerified = false;

    constructor(
        private userService: UserService,
        private utils: UtilsService,
        private route: Router,
        private fireAuth: AngularFireAuth) {
        this.confirmSignIn(window.location.href);
    }

    ngOnInit() {}

    confirmSignIn(url) {
        if (this.fireAuth.auth.isSignInWithEmailLink(url)) {
            let email = localStorage.getItem('emailForSignIn');
            if (!email) {
                email = window.prompt('Please provide email for confirmation');
            }
            const result = this.fireAuth.auth.signInWithEmailLink(email, url);
            this.emailVerified = true;
            localStorage.removeItem('emailForSignIn');
            this.fireAuth.auth.onAuthStateChanged(user => {
                // this.authService.user = this.fireAuth.authState;
                this.processSuccessfulSignIn(user.uid, email);
                this.userService.createUser(user.uid, { email });
                this.route.navigate(['/home']);
            });
        }
    }

    processSuccessfulSignIn(uid, email) {
        this.utils.uid = uid;
        this.utils.userInfo.id = uid;
        this.utils.userInfo.email = email;
        localStorage.setItem('uid', uid);
    }
}

