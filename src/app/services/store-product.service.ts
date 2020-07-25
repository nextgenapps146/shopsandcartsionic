import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class StoreProductService {

    storeProductRef: AngularFirestoreCollection<StoreProduct>;

    constructor(
        public Afs: AngularFirestore
        ) { }

    public async getStoreProductSingle(productId) {
        this.storeProductRef = this.Afs.collection<StoreProduct>('storeproducts');
        return this.storeProductRef.doc(productId).snapshotChanges().pipe(
            map((res: any) => {
                const result = res.payload.data() as StoreProduct;
                if (result) {
                    result.id = res.payload.id;
                }
                return result;
            })
        );
    }

    public async getStoreProducts(storeId, categoryId) {
        this.storeProductRef =
            this.Afs.collection<StoreProduct>('storeproducts', ref => ref
                .where('storeid', '==', storeId)
                .where('categories', 'array-contains', categoryId)
            );
        return this.storeProductRef.snapshotChanges().pipe(
            map(res => res.map((dataItems) => {
                const data = dataItems.payload.doc.data(),
                id = dataItems.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    // public async getStoreProducts() {
    //     this.utils.storeProducts = [];
    //     this.selectedStoreProductsCollectionRefrence = this.Afs.collection('storeproducts', ref => ref.where('storeid', '==', this.utils.storeInfo.id));
    //     return this.selectedStoreProductsCollectionRefrence
    //         .snapshotChanges().pipe(
    //             map(res => res.map((dataItems) => {
    //                 const data = dataItems.payload.doc.data();
    //                 const id = dataItems.payload.doc.id;
    //                 this.utils.storeProducts.push({ id, ...data });
    //                 return { id, ...data };
    //             }))
    //         );
    // }

    // Add Store only when user has a category from market place..
}

export interface StoreProduct {
    sellerid: string;
    productid: string;
    id: any;
}
