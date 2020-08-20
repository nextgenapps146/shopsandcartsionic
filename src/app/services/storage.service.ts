import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor() { }

    getAllUserChats(userId) {
        const chats = localStorage.getItem(userId + 'chats');
        return JSON.parse(chats);
    }

    getUserStoreChat(userId, storeId) {
        const messages = localStorage.getItem(userId + storeId + 'chat');
    }

}
