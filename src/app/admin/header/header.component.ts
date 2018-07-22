import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as ProductSearch from './store/header.actions';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  numberOfProductsState: Observable<{ numberOfPoroducts: number }>;

  SearchField: Observable<{ search: String }>;
  search: String = "";

  constructor(private store: Store<{ products: { numberOfPoroducts: number } }>,private storeSearch: Store<{ products: { search: String } }>) {
    this.numberOfProductsState = this.store.select('products');
  }
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  filter(){
    console.log("jhdjsld ");
    this.storeSearch.dispatch(new ProductSearch.SearchOfProductes(this.search))
  }

  logout() {
    this.authService.logout();
  }

}
