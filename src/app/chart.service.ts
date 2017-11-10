import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChartService {

  productsSource = new BehaviorSubject<any[]>([]);
  currentProduct = this.productsSource.asObservable();

  constructor() { }

  addProduct(product: any) {
    this.productsSource.next(product);
  }
}