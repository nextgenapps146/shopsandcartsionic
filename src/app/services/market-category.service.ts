import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MarketCategoryService {

    marketCategoryRef: AngularFirestoreCollection<Category>;

    constructor(
        public Afs: AngularFirestore
        ) { }

    public async getMarketplaceCategories() {
        // const marketplace = this.utils.storage.marketplace;
        // marketplace.categories = [];
        this.marketCategoryRef = this.Afs.collection<Category>('categories', ref => ref.orderBy('name'));
        return this.marketCategoryRef.snapshotChanges().pipe(
                map(res => res.map((dataItems) => {
                    const data = dataItems.payload.doc.data() as Category,
                    id = dataItems.payload.doc.id;
                    return { id, ...data };
                }))
            );
    }
}

export interface Category {
    name: string;
    description: string;
    images: [];
    id?: string;
}
