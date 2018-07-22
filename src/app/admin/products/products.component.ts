import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as ProductActions from './store/products.actions';
import {Product} from "./product";
import {ProductStoreService} from "./product-store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  numberOfProductsState:Observable<{numberOfPoroducts:number}>

  products : Array<Product>;
  constructor(private store:Store<{products:{numberOfPoroducts:number}}>,private productStore:ProductStoreService,private router: Router) { }

  ngOnInit() {
    this.numberOfProductsState=this.store.select('products');

    this.products=this.productStore.getProducts();
  }


  incrementProducts(){
    let num=2
    this.store.dispatch(new ProductActions.IncrementNumberOfProductes(num))
  }

  deleteProduct(product:Product){
  this.productStore.removeProduct(product);
  }


}
