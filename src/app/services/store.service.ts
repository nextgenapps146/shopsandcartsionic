import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
    providedIn: 'root'
})

export class StoreService {

    myStoreRef: AngularFirestoreCollection<Store>;

    constructor(
        public Afs: AngularFirestore,
        public utils: UtilsService
        ) { }

    public async getStoreInfo(userId) {
        if (userId) {
            this.myStoreRef = this.Afs.collection<Store>('stores');
            return this.myStoreRef.doc(userId).snapshotChanges().pipe(
                map((res: any) => {
                    const result = res.payload.data() as Store;
                    if (result) {
                        result.id = res.payload.id;
                    }
                    return result;
                })
            );
        }
    }

    public async createStore(userId, result) {
        this.myStoreRef = this.Afs.collection<Store>('stores');
        await this.utils.openLoader();
        await this.myStoreRef.doc(userId).set({ ...result }).then(snapshot => {
            console.log(snapshot);
        });
        await this.utils.closeLoading();
    }

}

export interface Store {
    id: any;
    city: string;
    iscredit: boolean;
    iscurbsidepickup: boolean;
    isdelivery: boolean;
    ispayonpickup: boolean;
    name: string;
    state: string;
    streetaddress: string;
    zipcode: number;
    categoriescount: number;
    productscount: number;
}

