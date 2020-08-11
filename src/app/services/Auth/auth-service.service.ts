import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
// import { UserDataService } from "../data-services/user-data.service";
import { User } from 'firebase';
import { resolve } from 'url';
import { UtilsService } from '../utils.service';
import { FirestoreService } from '../firestore/firestore.service';
import { UserService } from '../user.service';

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
    constructor(
        private fireStore: FirestoreService,
        private fireAuth: AngularFireAuth,
        private userService: UserService,
        private utils: UtilsService) {

        // this.fireAuth.authState.pipe(
        //     take(1)
        // ).subscribe(user => {
        //     if (user) {
        //         // this.authInfo$.next(new AuthInfo(user.uid));
        //     }
        // });
    }

    public forgotPassoword(email: string) {
        this.fireAuth.auth.sendPasswordResetEmail(email).then(() => {
            this.utils.presentToast('Email Sent', true, 'bottom', 2100);
        }).catch(err => this.utils.presentToast(`${err}`, true, 'bottom', 2100));
    }

    public createAccount(email: string, password: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.utils.openLoader();
            this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
                if (res.user) {
                    // this.authInfo$.next(new AuthInfo(res.user.uid));
                    this.utils.closeLoading();
                    this.userService.createUser(res.user.uid, {
                        email: email
                    });
                    resolve(res.user);
                }
            })
            .catch(err => {
                this.utils.closeLoading();
                // this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
                reject(`creation failed ${err}`);
            });
        });
    }

    public login(email: string, password: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.utils.openLoader();
            this.fireAuth.auth.signInWithEmailAndPassword(email, password)
                .then(res => {
                    if (res.user) {
                        this.userService.getUserInfo(res.user.uid).then((data) => {
                            data.subscribe(result => {
                                if (result.id) {
                                    this.utils.closeLoading();
                                    resolve(result);
                                }
                            });
                        });
                        // this.authInfo$.next(new AuthInfo(res.user.uid));
                        // resolve(res.user);
                    }
                })
                .catch(err => {
                    this.utils.closeLoading();
                    // this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
                    reject(`login failed ${err}`);
                });
        });
    }

    public logout(): Promise<void> {
        // this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
        return this.fireAuth.auth.signOut();
    }
    public checkAuth() {
        return new Promise(resolve => {
            this.fireAuth.auth.onAuthStateChanged(user => {
                resolve(user);
            });
        });
    }
}
