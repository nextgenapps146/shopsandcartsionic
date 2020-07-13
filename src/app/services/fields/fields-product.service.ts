import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FieldsProductService {

    productFields = [
        {
            placeholder: 'Enter Product Name',
            iconName: 'basketball',
            type: 'text',
            modelValue: '',
            name: 'name',
            label: 'Product Name',
            required: true
        },
        {
            placeholder: 'Enter Product Regular Price',
            iconName: 'filing',
            type: 'text',
            modelValue: '',
            name: 'regularPrice',
            label: 'Product Regular Price',
            required: true
        },
        {
            placeholder: 'Enter Product Sale Price',
            iconName: 'filing',
            type: 'text',
            modelValue: '',
            name: 'salePrice',
            label: 'Product Sale Price',
            required: true
        },
        // {
        //     placeholder: 'Price per Quanity',
        //     iconName: 'keypad',
        //     type: 'text',
        //     modelValue: '',
        //     name: 'pricePerQuantity',
        //     label: 'Price per Quanity',
        //     hints: 'Fill this field if this regularPrice is related to any quantity otherwise leave blank so we take is as 1'
        // },
        {
            placeholder: 'Enter Product Offer',
            iconName: 'medical',
            modelValue: '',
            name: 'offer',
            label: 'Product Description',
            required: false,
            type: 'number',
            hints: 'In % but do not inlude % sign here'
        },
        // {
        //     placeholder: 'Enter Product Delivery Instructions',
        //     iconName: 'list',
        //     type: 'text',
        //     modelValue: '',
        //     name: 'instruction',
        //     label: 'Product Intruction',
        //     required: true
        // },
        // {
        //     placeholder: 'Enter Pin code',
        //     iconName: 'keypad',
        //     type: 'array',
        //     modelValue: '',
        //     name: 'pin',
        //     label: 'Product Supproted Pin',
        //     hints: 'Please fill all the pincode if it is supported on specific pincode and if it is supported on all pincode the leave it empty'
        // },
        {
            placeholder: 'Product Categories',
            iconName: 'keypad',
            type: 'multiSelect',
            modelValue: '',
            name: 'categories',
            label: 'Product Categories',
            options: []
        },
        // {
        //     placeholder: 'Enter tags Here',
        //     iconName: 'keypad',
        //     type: 'select',
        //     modelValue: '',
        //     name: 'tags',
        //     label: 'Product tags',
        //     limit: 1,
        //     options: [{
        //         id: 'Short Time Offers',
        //         name: 'Short Time Offers'
        //     }, {
        //         id: 'Top Savers Today',
        //         name: 'Top Savers Today'
        //     }, {
        //         id: 'Popular Deals',
        //         name: 'Popular Deals'
        //     }, {
        //         id: 'Best Offers',
        //         name: 'Best Offers'
        //     }],
        //     hints: 'only one tag per product is allow product here'
        // },
        // {
        //     placeholder: 'Product Delivery In',
        //     iconName: 'keypad',
        //     type: 'text',
        //     modelValue: '',
        //     name: 'delivery_in',
        //     label: 'Product Delivery In',
        //     required: true
        // },
        {
            placeholder: 'In Stock',
            iconName: 'keypad',
            type: 'boolean',
            modelValue: false,
            name: 'instock',
            label: 'Product In Stock',
            required: true
        },
        {
            placeholder: 'Free Shipping',
            iconName: 'keypad',
            type: 'boolean',
            modelValue: false,
            name: 'free_shipping',
            label: 'Free Shipping',
            required: true
        },
        {
            placeholder: 'Cash on Delivery',
            iconName: 'keypad',
            type: 'boolean',
            modelValue: false,
            name: 'cod',
            label: 'Cash on Delivery',
            required: true
        },
        {
            placeholder: 'Upload Image 1 Here',
            iconName: 'keypad',
            type: 'image',
            modelValue: '',
            name: 'image1',
            label: 'Product Image',
            required: true
        },
        {
            placeholder: 'Upload Image 2 Here ',
            iconName: 'keypad',
            type: 'image',
            modelValue: '',
            name: 'image2',
            label: 'Product Image'
        },
        {
            placeholder: 'Upload Image 3 Here',
            iconName: 'keypad',
            type: 'image',
            modelValue: '',
            name: 'image3',
            label: 'Product Image'
        },
        {
            placeholder: 'Upload Image 4 Here',
            iconName: 'keypad',
            type: 'image',
            modelValue: '',
            name: 'image4',
            label: 'Product Image'
        },
        {
            placeholder: 'Enter Product Description',
            iconName: 'journal',
            type: 'largeText',
            modelValue: '',
            name: 'description',
            label: 'Product Discount',
            required: true
        }
    ];

    productTable = [
        { name: 'id', field: '', type: 'index' },
        { name: 'images', field: 'images', type: 'image' },
        { name: 'name', field: 'name' },
        { name: 'cash on delevery', field: 'cod' },
        { name: 'Product Delivery In', field: 'delivery_in' },
        { name: 'Free Shipping', field: 'free_shipping' },
        { name: 'quantity', field: 'pricePerQuantity' },
        { name: 'regularPrice', field: 'regularPrice' },
        { name: 'salePrice', field: 'salePrice' },
        { name: 'offer', field: 'offer' },
        // { name: 'description', field: 'description' },
        { name: 'pin code', field: 'pin' },
        { name: 'delivery instructions', field: 'instruction' },
        { name: 'categories', field: 'categories' },
        { name: 'tags', field: 'tags' },
        { name: 'actions', field: '', type: 'actions' },
    ];

    productAcceptedField =
        ['cod',
        'delivery_in',
        'free_shipping',
        'images',
        'name',
        'tags',
        'pricePerQuantity',
        'regularPrice',
        'salePrice',
        'offer',
        'instock',
        'description',
        'pin',
        'instruction',
        'categories'
    ];
}
