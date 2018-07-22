import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as ProductActions from './store/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  numberOfProductsState:Observable<{numberOfPoroducts:number}>
  
  constructor(private store:Store<{products:{numberOfPoroducts:number}}>) { }

  ngOnInit() {
    this.numberOfProductsState=this.store.select('products');
  }


  incrementProducts(){
    let num=2
    this.store.dispatch(new ProductActions.IncrementNumberOfProductes(num))
  }

}
