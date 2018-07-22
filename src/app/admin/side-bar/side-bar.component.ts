import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {


  numberOfProductsState:Observable<{numberOfPoroducts:number}>;

  constructor(private store:Store<{products:{numberOfPoroducts:number}}>) {
    this.numberOfProductsState=this.store.select('products');

  }
  ngOnInit() {
  }

}
