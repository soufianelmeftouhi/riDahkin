import {Injectable} from '@angular/core';
import {Product} from "./product";

@Injectable()
export class ProductStoreService {

  private products: Array<Product> = [];

  constructor() {
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  editProduct(productEdit: Product): void {
    this.products = this.products.map(product => {
      if (productEdit.id == product.id) return productEdit;
      return product;
    });
  }

  getProduct(id: String): Product {
    return this.products.find((product) => product.id === id)
  }
}
