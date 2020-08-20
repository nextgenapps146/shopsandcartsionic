import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MarketProductService {

    marketProductRef: AngularFirestoreCollection<Products>;

    constructor(
        public Afs: AngularFirestore
        ) { }

    public async getMarketplaceCategoryProducts(categoryId) {
        this.marketProductRef =
            this.Afs.collection('products',
                ref => ref.where('categories', 'array-contains', categoryId));
        return this.marketProductRef.snapshotChanges().pipe(
                map(res => res.map((dataItems) => {
                    const data = dataItems.payload.doc.data(),
                    id = dataItems.payload.doc.id;
                    return { id, ...data };
                }))
            );
    }
}

export interface Products {
    name: string;
    rate: string;
    description: string;
    offer: string;
    instruction: string;
    pin: number;
    images: [];
    id?: string;
}
