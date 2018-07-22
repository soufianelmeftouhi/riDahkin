import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {ProductStoreService} from "./product-store.service";
import { FilterPipe } from './filter.pipe';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    NewProductComponent,
    EditProductComponent,
    FilterPipe
  ],
  providers:[ProductStoreService]
})
export class ProductsModule { }
