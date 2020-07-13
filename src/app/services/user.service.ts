import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    userRef: AngularFirestoreCollection<User>;
    usersRef: AngularFirestoreCollection;

    constructor(
        public Afs: AngularFirestore
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
}

export interface User {
    email: string;
    id: string;
    username: string;
}
