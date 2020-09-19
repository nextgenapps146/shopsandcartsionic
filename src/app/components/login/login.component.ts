import { Component, OnInit } from '@angular/core';
import { PopoverController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

    public email = '';
    public error = '';
    public emailSent = '';

    // confirmEmailRedirect = 'https://devgretello.web.app/confirm-email';
    confirmEmailRedirect = 'http://localhost:8100/confirm-email';

    constructor(
        private fireAuth: AngularFireAuth,
        public loadingController: LoadingController,
        public popoverController: PopoverController) {
    }

    ngOnInit() {}

    login() {
        this.error = '';
        if (this.validateEmail(this.email)) {
            this.error = '';
            this.proceedToLogin(this.email);
        } else {
            this.error = 'Please enter a valid email';
        }
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    proceedToLogin(email: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.openLoader();
            const params = {
                url: this.confirmEmailRedirect,
                handleCodeInApp: true
            };
            this.fireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(res => {
                this.fireAuth.auth.sendSignInLinkToEmail(email, params).then(sent => {
                    this.emailSent = 'Signin Email Sent to your inbox. Please check your email and click on the link to login.';
                    resolve(email);
                }).catch(err => {
                    this.closeLoading();
                    this.emailSent = '';
                    reject(`login failed ${err}`);
                });
            }).catch(err => {

            });
            localStorage.setItem('emailForSignIn', email);
        });
    }

    async openLoader() {
        const loading = await this.loadingController.create({
            message: 'Please Wait ...',
            duration: 2000
        });
        await loading.present();
    }

    async closeLoading() {
        return await this.loadingController.dismiss();
    }

}
