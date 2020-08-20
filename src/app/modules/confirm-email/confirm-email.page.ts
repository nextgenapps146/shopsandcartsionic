import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceService } from '../../services/auth-service.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-confirm-email',
    templateUrl: './confirm-email.page.html',
    styleUrls: ['./confirm-email.page.scss'],
})

export class ConfirmEmailPage implements OnInit {

    emailVerified = false;

    constructor(
        private authService: AuthServiceService,
        private userService: UserService,
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
                this.authService.user = this.fireAuth.authState;
                this.userService.createUser(user.uid, { email, type: 's' });
            });
        }
    }
}

