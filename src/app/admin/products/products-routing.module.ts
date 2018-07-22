import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AuthGuard } from '../../auth/auth.guard';
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";



const routes: Routes = [
    {
      path: '',
      component: ProductsComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'new',
      component: NewProductComponent
    }, {
      path: 'edit/:id',
      component: EditProductComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
