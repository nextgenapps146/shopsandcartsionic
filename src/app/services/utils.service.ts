import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class UtilsService {

    // userid: BehaviorSubject<string> = new BehaviorSubject<string>('');
    availableCities = ['Naperville', 'Schaumberg', 'Chicago', 'Plainfield', 'Aurora', 'Bolingbrook'];
    defaultProfilePic = '../assets/images/user.png';
    userShoppingCity = '';
    userInfo: any = {
        id: '',
        firstname: '',
        lastname: '',
        picture: '../assets/images/user.png',
        email: '',
        phone: ''
    };
    orderUserAddress: '';
    userShoppingStoreInfo: any = {};
    AddAdressBackUrl = '';
    storeInfo = null;
    storeProducts = [];
    quantitiesAndProductsMap = {};
    currentAddedItem: any;

    // Seller Store ----
    myStore: any = {};

    constructor(
        public loadingController: LoadingController,
        private fireAuth: AngularFireAuth,
        private router: Router,
        private toastController: ToastController,
        private nav: NavController,
        public alertController: AlertController) {
        // this.getUserId();
    }

    // getUserId() {
    //     this.fireAuth.auth.onAuthStateChanged(user => {
    //         if (user && user.uid) {
    //             this.userid.next(user.uid);
    //         }
    //     });
    // }

    navigate(link, forward?) {
        if (forward) {
            this.nav.navigateForward('/' + link);
        } else {
            this.router.navigateByUrl('/' + link);
        }
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    async presentToast(messages?, showButton?, positions?, durations?) {
        const toast = await this.toastController.create({
            message: messages || 'Something is wrong!',
            showCloseButton: showButton || false,
            position: positions || 'top',
            duration: durations || 2000
        });
        toast.present();
    }

    setUserInfoToLocalStorage(data) {
        this.userInfo.id = data.uid || data.id || this.userInfo.id;
        this.userInfo.email = data.email || this.userInfo.email;
        this.userInfo.picture = data.picture || this.defaultProfilePic;
        this.userInfo.firstname = data.firstname || this.userInfo.firstname;
        this.userInfo.lastname = data.lastname || this.userInfo.lastname;
        this.userInfo.phone = data.phone || this.userInfo.phone;
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    }

    removeConform(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const alert = await this.alertController.create({
                header: 'Confirm!',
                message: 'Are you sure you want to remove this item',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (cancel) => {

                            resolve('cancel');
                        }
                    }, {
                        text: 'Okay',
                        handler: (ok) => {

                            resolve('ok');
                        }
                    }
                ]
            });

            alert.present();
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

    getLocalUrl(_imagePath): Promise<{ url: string, nativeUrl: string }> {
        return new Promise((resolve, reject) => {
            const name = _imagePath.split('/');
            this.makeFileIntoBlob(_imagePath, name[name.length - 1]).then((image) => {
                resolve({ url: window.URL.createObjectURL(image), nativeUrl: _imagePath });
            }).catch(
                _ => {
                    reject();

                }
            );
        });
    }

    makeFileIntoBlob(_imagePath, fileName) {
        return new Promise((resolve, reject) => {
            window['resolveLocalFileSystemURL'](_imagePath, (fileEntry) => {
                fileEntry['file']((resFile) => {
                    const reader = new FileReader();
                    reader.onload = (evt: any) => {
                        const imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
                        imgBlob.name = fileName;
                        resolve(imgBlob);
                    };
                    reader.onloadend = (evt: any) => {
                        const imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
                        imgBlob.name = fileName;
                        resolve(imgBlob);
                    };

                    reader.onerror = (e) => {

                        reject(e);
                    };

                    reader.readAsArrayBuffer(resFile);
                }, (err) => {

                    reject({ message: 'File does not exists.' });
                });
            }, (err) => {
            });
        });
    }

    getAppPages() {
        return [
            { title: 'Home', url: '/home', icon: 'home' },
            { title: 'My Orders', url: '/order', icon: 'ios-albums' },
            { title: 'My Addresses', url: '/my-account', icon: 'card' },
            { title: 'Offers', url: '/offers', icon: 'flame' },
            { title: 'Create Store', url: '/create-store', icon: 'cube' }
        ];
    }

    getOtherPages() {
        return [
            { title: 'About Us', url: '/about-us', icon: 'information-circle-outline', mode: 'ios' },
            // { title: 'Rate Us', url: '/rate-us', icon: 'star-half', mode: 'ios' },
            // { title: 'Share', url: '/share', icon: 'share', mode: 'md' },
            { title: 'Need Help', url: '/need-help', icon: 'help-circle-outline', mode: 'ios' }
        ];
    }

    getRandomNumber() {
        return Math.random().toString(36).substr(2, 16);
    }

    getDisplayTime(dateString) {
        const timeString = new Date(dateString).toLocaleTimeString(),
        s = timeString.split(' '),
        c = s[0].split(':'),
        time = c[0] + ':' + c[1] + ' ' + s[1];
        return time;
    }

    getCombinedChatIds(uid1, uid2) {
        if (uid1 < uid2) {
            return uid1 + uid2;
        } else {
            return uid2 + uid1;
        }
    }

    handleOverlay(item) {
        if (this.currentAddedItem) {
            this.currentAddedItem.isAdding = false; // make the previous one false
        }
        this.currentAddedItem = item;
        item.isAdding = true;
    }

    handleOverlayClick(item) {
        item.isAdding = false;
        this.currentAddedItem = null;
    }

}
