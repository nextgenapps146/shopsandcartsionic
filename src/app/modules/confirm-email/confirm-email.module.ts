import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConfirmEmailPage } from './confirm-email.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: ConfirmEmailPage
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
    declarations: [ConfirmEmailPage]
})
export class ConfirmEmailPageModule { }
