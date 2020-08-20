import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    userRef: AngularFirestoreCollection<User>;
    usersRef: AngularFirestoreCollection;

    constructor(
        public Afs: AngularFirestore,
        public utils: UtilsService
        ) { }

    public async getUserInfo(userId) {
        this.userRef = this.Afs.collection<User>('users');
        return this.userRef.doc(userId).snapshotChanges().pipe(
            map((res: any) => {
                const result = res.payload.data() as User;
                if (result) {
                    result.id = res.payload.id;
                }
                return result;
            })
        );
    }

    public async getUsers() {
        this.usersRef = this.Afs.collection('users', ref => ref);
        return this.usersRef.snapshotChanges().pipe(
            map(res => res.map(dataItems => {
                const data = dataItems.payload.doc.data();
                const id = dataItems.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    public async updateMyDeviceToken(userId) {
        const deviceId = localStorage.getItem('deviceid');
        if (deviceId && userId) {
            this.userRef = this.Afs.collection<User>('users');
            await this.userRef.doc(userId).update({ token: deviceId });
        }
    }

    public async createUser(uniqueId, result) {
        this.usersRef = this.Afs.collection<User>('users');
        await this.utils.openLoader();
        await this.usersRef.doc(uniqueId).set({ ...result }).then(snapshot => {
            this.utils.userInfo = { id: uniqueId, ...result };
        });
        await this.utils.closeLoading();
    }

    public async updateUser(dataId, result) {
        this.usersRef = this.Afs.collection<User>('users');
        await this.utils.openLoader();
        delete result.id;
        await this.usersRef.doc(dataId).update({ ...result });
        await this.utils.closeLoading();
        this.utils.setUserInfoToLocalStorage(result);
        this.utils.presentToast('Profile Updated!', true, 'top', 2100);
    }
}

export interface User {
    email: string;
    id: string;
    firstname: string;
    lastname: string;
    phone: number;
    type: string;
}
