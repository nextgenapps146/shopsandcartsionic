import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SelectLocationComponent } from './select-location/select-location.component';

@NgModule({
    declarations: [
        HeaderComponent,
        CategoriesComponent,
        ProductsComponent,
        ProductDetailComponent,
        SelectLocationComponent
    ],
    exports: [
        HeaderComponent,
        CategoriesComponent,
        ProductsComponent,
        ProductDetailComponent,
        SelectLocationComponent
    ],
    imports: [
        FontAwesomeModule,
        CommonModule,
        FormsModule,
        IonicModule.forRoot(),
    ]
})
export class ComponentsModule { }
