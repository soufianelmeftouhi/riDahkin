import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { ContentComponent } from './admin/content.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesComponent } from './admin/categories/categories.component';
import { ProductsModule } from './admin/products/products.module';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './admin/products/store/products.reducers';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth/auth.guard';
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
    AngularFireModule.initializeApp(environment.firebase,'ridahkin'),
    AppRoutingModule,
    ProductsModule,
    StoreModule.forRoot({products: productsReducer, filter: productsReducerSearch}),
    AuthModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
