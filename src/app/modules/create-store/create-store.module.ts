import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateStorePage } from './create-store.page';
import { ComponentsModule } from '../../components/components.module';
import { LocationPage } from '../location/location.page';

const routes: Routes = [
    {
        path: '',
        component: CreateStorePage
    }
];

@NgModule({
    imports: [
        ComponentsModule,
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CreateStorePage, LocationPage],
    entryComponents: [LocationPage]
})
export class CreateStorePageModule { }
