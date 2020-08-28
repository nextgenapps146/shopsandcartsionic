import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UtilsService } from './utils.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

// export class AuthInfo {
//     constructor(public $uid: string) { }

//     isLoggedIn() {
//         return !!this.$uid;
//     }
// }

@Injectable({
    providedIn: 'root'
})

export class AuthServiceService {

    // static UNKNOWN_USER = new AuthInfo(null);
    // public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthServiceService.UNKNOWN_USER);
    // userId = this.authInfo$.asObservable();

    user: Observable<any>;
    emailSent = '';
    // confirmEmailRedirect = 'https://devgretello.web.app/confirm-email';
    confirmEmailRedirect = 'http://localhost:8100/confirm-email';

    constructor(
        private fireAuth: AngularFireAuth,
        private utils: UtilsService) {
            this.user = this.fireAuth.authState;
        // this.fireAuth.authState.pipe(
        //     take(1)
        // ).subscribe(user => {
        //     if (user) {
        //         // this.authInfo$.next(new AuthInfo(user.uid));
        //     }
        // });
    }

    // public forgotPassoword(email: string) {
    //     this.fireAuth.auth.sendPasswordResetEmail(email).then(() => {
    //         this.utils.presentToast('Email Sent', true, 'bottom', 2100);
    //     }).catch(err => this.utils.presentToast(`${err}`, true, 'bottom', 2100));
    // }

    // public createAccount(email: string, password: string): Promise<any> {
    //     return new Promise<any>((resolve, reject) => {
    //         this.utils.openLoader();
    //         this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
    //             if (res.user) {
    //                 // this.authInfo$.next(new AuthInfo(res.user.uid));
    //                 this.utils.closeLoading();
    //                 this.userService.createUser(res.user.uid, {
    //                     email: email,
    //                     type: 'c'
    //                 });
    //                 resolve(res.user);
    //             }
    //         })
    //         .catch(err => {
    //             this.utils.closeLoading();
    //             // this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
    //             reject(`creation failed ${err}`);
    //         });
    //     });
    // }

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

    // public verifyEmail() {
    //     this.fireAuth.auth.
    // }

    // public checkAuth() {
    //     return new Promise(resolve => {
    //         this.fireAuth.auth.onAuthStateChanged(user => {
    //             resolve(user);
    //         });
    //     });
    // }
}
