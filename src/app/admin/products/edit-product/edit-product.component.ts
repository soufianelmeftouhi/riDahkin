import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Product} from "../product";
import {ProductStoreService} from "../product-store.service";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;

  productForm: FormGroup;

  constructor(private productStore: ProductStoreService, private router: Router, private routeActivate: ActivatedRoute) {

    this.routeActivate.params.subscribe((params: Params) => {

      this.product = this.productStore.getProduct(params['id']);

      if (!this.product) this.router.navigate(['/products']);

      this.productForm = new FormGroup({
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description),
      });
    });


  }

  ngOnInit() {
  }

  edit() {
    this.productForm.value.id = this.product.id;
    this.product = this.productForm.value;
    this.productStore.editProduct(this.product);
    this.router.navigate(['/products']);

  }
}
