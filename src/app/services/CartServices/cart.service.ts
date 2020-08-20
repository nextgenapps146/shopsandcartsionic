import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    public static storeCarts: Array<{ store_id: string; items: Array<any> }> = [];
    public static current_store_id = '-1';

    public addCart: CartArray;
    public subTotal;
    public deliveryCharge;
    public totalSave;
    public grandTotal;
    public productQty = 0;
    public orderComplete: Array<any>;

    static getCurrentStoreCartIndex() {
        return (CartService.storeCarts || []).findIndex(
            (store) => store.store_id === CartService.current_store_id
        );
    }

    static restoreCarts() {
        try {
            const store_carts = localStorage.getItem('STORECARTS');
            CartService.storeCarts = JSON.parse(store_carts);
        } catch (err) { }
    }

    constructor() {
        this.addCart = new CartArray();
        this.subTotal = 0;
        this.grandTotal = 0;
        this.orderComplete = [];
    }

    // setCurrentStore(store_id) {
    //     CartService.current_store_id = store_id;
    //     const store_index = CartService.getCurrentStoreCartIndex();
    //     if (store_index >= 0) {
    //         this.addCart = CartService.storeCarts[store_index].items;
    //     } else {
    //         this.addCart = new CartArray();
    //     }
    //     this.addCart.map((el) => {
    //         const total = el.units * el.salePrice;
    //         this.subTotal = total;
    //         this.deliveryCharge = el.deliveryCharge
    //             ? this.deliveryCharge + el.deliveryCharge
    //             : this.deliveryCharge;
    //         this.grandTotal += this.subTotal + this.deliveryCharge;
    //         this.totalSave += el.units * (parseInt(el.regularPrice) - el.salePrice);
    //     });
    //     // localStorage.setItem('STORECARTS', JSON.stringify(CartService.storeCarts)); We ill do it later
    // }

    removeCurrentStore() {
        const store_index = CartService.getCurrentStoreCartIndex();
        if (store_index >= 0) {
            CartService.storeCarts.splice(store_index, 1);
        }
        // localStorage.setItem('STORECARTS', JSON.stringify(CartService.storeCarts)); // later
        CartService.current_store_id = '-1';
    }
}

class CartArray extends Array {
    constructor(...args) {
        super(...args);
    }

    push(item): number {
        const store_index = CartService.getCurrentStoreCartIndex();
        if (store_index >= 0) {
            CartService.storeCarts[store_index].items =
                CartService.storeCarts[store_index].items || [];
            return CartService.storeCarts[store_index].items.push(item);
        } else {
            CartService.storeCarts = CartService.storeCarts || [];
            CartService.storeCarts.push({
                store_id: CartService.current_store_id,
                items: [item],
            });
        }
        // localStorage.setItem('STORECARTS', JSON.stringify(CartService.storeCarts)); // later
    }
}
