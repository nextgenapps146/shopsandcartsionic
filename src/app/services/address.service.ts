import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
    providedIn: 'root'
})

export class AddressService {

    addrRef: AngularFirestoreCollection;

    constructor(
        public Afs: AngularFirestore,
        public utils: UtilsService
        ) { }

    // only add to local storage
    public async addUserAddress(result) {
        await this.utils.openLoader();
        this.addrRef = this.Afs.collection('address');
        await this.addrRef.add({ ...result, userid: this.utils.userInfo.id });
        await this.utils.closeLoading();
    }

    public async getUserAddress() {
        this.addrRef = this.Afs.collection('address', ref => ref.where('userid', '==', this.utils.userInfo.id));
        return this.addrRef.snapshotChanges().pipe(
            map(res => res.map(dataItems => {
                const data: any = dataItems.payload.doc.data();
                const id = dataItems.payload.doc.id;
                // this.UserAddress.push({ id, ...data });
                return { id, ...data };
            }))
        );
    }

    public async getDeliveryAddress(address_id) {
        this.addrRef = this.Afs.collection('address');
        return this.addrRef.doc(address_id).snapshotChanges().pipe(
            map((res: any) => {
                const record = res.payload.data();
                return record;
            })
        );
    }
}
