import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeliveryPage } from './delivery.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from '../../components/components.module';
import { LocationPage } from '../location/location.page';
const routes: Routes = [
    {
        path: '',
        component: DeliveryPage
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
    declarations: [DeliveryPage, LocationPage],
    entryComponents: [LocationPage]
})
export class DeliveryPageModule { }
