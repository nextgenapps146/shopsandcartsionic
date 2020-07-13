import { CommonModule, } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccordianComponent } from './components/accordian/accordian.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [AccordianComponent],
    exports: [AccordianComponent],

})

export class SharedModule { }
