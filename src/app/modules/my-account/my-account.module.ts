import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyAccountPage } from './my-account.page';
import { PaymentcardsComponent } from '../../components/paymentcards/paymentcards.component';
import { MyProfileComponent } from '../../components/my-profile/my-profile.component';
import { MyAddressComponent } from '../../components/my-address/my-address.component';

const routes: Routes = [
  {
    path: '',
    component: MyAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyAccountPage, PaymentcardsComponent, MyProfileComponent, MyAddressComponent]
})
export class MyAccountPageModule {}
