import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './admin/header/header.component';
import {SideBarComponent} from './admin/side-bar/side-bar.component';
import {ContentComponent} from './admin/content.component';
import {AppRoutingModule} from './/app-routing.module';
import {CategoriesComponent} from './admin/categories/categories.component';
import {ProductsModule} from './admin/products/products.module';
import {StoreModule} from '@ngrx/store';
import {productsReducer} from './admin/products/store/products.reducers';
import {productsReducerSearch} from './admin/header/store/header.reducers';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ContentComponent,
    CategoriesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    StoreModule.forRoot({products: productsReducer, filter: productsReducerSearch})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
