import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CartPage } from './cart.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocationPage } from '../location/location.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: CartPage
    }
];

@NgModule({
    imports: [
        ComponentsModule,
        CommonModule,
        FormsModule,
        IonicModule,
        FontAwesomeModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CartPage]
})
export class CartPageModule { }
