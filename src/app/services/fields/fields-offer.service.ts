import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FieldsOfferService {

    offerTable = [
        { name: 'id', field: '', type: 'index' },
        { name: 'title', field: 'title' },
        { name: 'images', field: 'images', type: 'image' },
        { name: 'description', field: 'description' },
        { name: 'condition', field: 'condition' },
        { name: 'discount', field: 'discount' },
        { name: 'actions', field: '', type: 'actions' }
    ];

    offerFields = [
        {
            placeholder: 'Enter offer title',
            iconName: 'basketball',
            type: 'text',
            modelValue: '',
            name: 'title',
            label: 'Offer title',
            required: true
        },
        {
            placeholder: 'Enter offer Description',
            iconName: 'journal',
            type: 'largeText',
            modelValue: '',
            name: 'description',
            label: 'Enter offer Description',
            required: true
        },
        {
            placeholder: 'banner Image',
            iconName: 'journal',
            type: 'image',
            modelValue: '',
            name: 'Image1',
            label: 'banner Image',
            required: true
        },
        {
            placeholder: 'Offer code',
            iconName: 'journal',
            type: 'text',
            modelValue: '',
            name: 'code',
            label: 'Offer code',
            required: true
        },
        {
            placeholder: 'Off will user get in %',
            iconName: 'journal',
            type: 'number',
            modelValue: '',
            name: 'discount',
            label: 'Discount will user get in %',
            required: true
        },
        {
            placeholder: 'Enter Offer condition',
            iconName: 'journal',
            type: 'text',
            modelValue: '',
            name: 'condition',
            label: 'Offer Condition',
            required: true
        },
    ];

    offerAcceptedField = [
        'title',
        'description',
        'condition',
        'discount',
        'code',
        'images'
    ];
}
