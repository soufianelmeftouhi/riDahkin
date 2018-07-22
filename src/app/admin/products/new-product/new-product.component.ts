import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as ProductActions from '../store/products.actions';
import {Product} from "../product";
import {ProductStoreService} from "../product-store.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product: Product;

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private store:Store<{products:{numberOfPoroducts:number}}>,private productStore: ProductStoreService, private router: Router) {

  }

  ngOnInit() {
  }

  create() {
    this.product = this.productForm.value;
    this.product.id = Math.floor(Math.random() * Math.floor(15820)).toString();
    this.productStore.addProduct(this.product);
    this.store.dispatch(new ProductActions.IncrementNumberOfProductes(1))
    this.router.navigate(['/products']);
  }

}
