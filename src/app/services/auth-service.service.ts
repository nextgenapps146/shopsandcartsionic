import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UtilsService } from './utils.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})

export class AuthServiceService {

    // user: Observable<any>;
    emailSent = '';
    // confirmEmailRedirect = 'https://devgretello.web.app/confirm-email';
    confirmEmailRedirect = 'http://localhost:8100/confirm-email';

    constructor(
        private fireAuth: AngularFireAuth,
        private utils: UtilsService) {
            // this.user = this.fireAuth.authState;
    }

    public login(email: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.utils.openLoader();
            const params = {
                url: this.confirmEmailRedirect,
                handleCodeInApp: true
            };
            this.fireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(res => {
                this.fireAuth.auth.sendSignInLinkToEmail(email, params).then(sent => {
                    this.emailSent = 'Signin Email Sent to your inbox. Please check your email and click on the link to login.';
                    resolve(email);
                }).catch(err => {
                    this.utils.closeLoading();
                    this.emailSent = '';
                    reject(`login failed ${err}`);
                });
            }).catch(err => {

            });
            localStorage.setItem('emailForSignIn', email);
        });
    }

    public logout(): Promise<void> {
        localStorage.removeItem('uid');
        return this.fireAuth.auth.signOut();
    }
}
