import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FieldsCategoryService {

    categoryFields = [
        {
            placeholder: 'Enter Category Name',
            iconName: 'basketball',
            type: 'text',
            modelValue: '',
            name: 'name',
            label: 'Product Name',
            required: true
        },
        {
            placeholder: 'category Image',
            iconName: 'journal',
            type: 'image',
            modelValue: '',
            name: 'images',
            label: 'category Image',
            required: true
        },
        {
            placeholder: 'Category Discount',
            iconName: 'journal',
            type: 'text',
            modelValue: '',
            name: 'discount',
            label: 'Category Discount'
        },
        // {
        //     placeholder: 'Show on Home Page',
        //     iconName: 'journal',
        //     type: 'boolean',
        //     modelValue: '',
        //     name: 'home_page',
        //     label: 'Product Discount'
        // },
        {
            placeholder: 'Enter category Description',
            iconName: 'journal',
            type: 'largeText',
            modelValue: '',
            name: 'description',
            label: 'Enter category Description',
            required: true
        }
    ];

    categoryTable = [
        { name: 'id', field: '', type: 'index' },
        { name: 'images', field: 'images', type: 'image' },
        { name: 'name', field: 'name' },
        // { name: 'description', field: 'description' },
        { name: 'discount', field: 'discount' },
        { name: 'Home Page show', field: 'home_page' },
        { name: 'actions', field: '', type: 'actions' }
    ];

    categoryAcceptedField = [
        'images',
        'name',
        'description',
        'home_page',
        'discount'
    ];
}
