import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FieldsUserService {

  userTable = [
        { name: 'id', field: '', type: 'index' },
        { name: 'username', field: 'username' },
        { name: 'gander', field: 'gender' },
        { name: 'email', field: 'email' },
        { name: 'phoneNumber', field: 'phoneNumber' }
    ];
}
