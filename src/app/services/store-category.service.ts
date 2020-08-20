import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
    providedIn: 'root'
})

export class StoreCategoryService {

    storeCategoryRef: AngularFirestoreCollection<StoreCategory>;

    constructor(
        public Afs: AngularFirestore,
        public utils: UtilsService
        ) { }

    public async getStoreCategories(storeId) {
        this.storeCategoryRef =
            this.Afs.collection<StoreCategory>('storecategories', ref => ref.orderBy('name')
                .where('storeid', '==', storeId)
            );
        return this.storeCategoryRef.snapshotChanges().pipe(
            map(res => res.map((dataItems) => {
                const data = dataItems.payload.doc.data(),
                id = dataItems.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    public async createStoreCategory(result) {
        await this.utils.openLoader();
        this.storeCategoryRef = this.Afs.collection('storecategories');
        await this.storeCategoryRef.add({ ...result }).then(snapshot => {
            console.log(snapshot);
        });
        await this.utils.closeLoading();
    }
}

export interface StoreCategory {
    id?: string; // primary doc id
    categoryid: string;
    sellerid: string;
    categoryname: string;
    percentageoff: number;
}
