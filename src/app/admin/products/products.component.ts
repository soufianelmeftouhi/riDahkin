import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
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

  numberOfProductsState: Observable<{ numberOfPoroducts: number }>;

  search: Observable<{ search: String }>;

  products: Array<Product>;

  constructor(private store: Store<{ products: { numberOfPoroducts: number } }>,private storeSearch: Store<{ filter: { search: String } }>, private productStore: ProductStoreService, private router: Router) {

    this.numberOfProductsState = this.store.select('products');

    this.search=this.storeSearch.select('filter');

  }

  ngOnInit() {
    this.products = this.productStore.getProducts();
  }

  deleteProduct(product: Product) {
    this.productStore.removeProduct(product);
    this.store.dispatch(new ProductActions.IncrementNumberOfProductes(-1))

  }


}
