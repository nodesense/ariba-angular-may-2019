// product.service.ts

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Brand } from '../models/brand';

import {filter, map} from 'rxjs/operators';


console.log('env', environment);

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
    console.log('product service created ');
  }

  getProducts(): Observable<Product[]> {
    return this
          .http
          .get<Product[]>(`${environment.apiEndPoint}/api/products`)
          .pipe (map ( products => {
            return products.map (product => {
              product.price = product.price - 100;
              return product;
            });
          }));
  }

  getProduct(id: number): Observable<Product> {
    return this.http
               .get<Product>(`${environment.apiEndPoint}/api/products/${id}`)
  }



  createProduct(product: Product): Observable<Product> {
    return this.http
               .post<Product>(`${environment.apiEndPoint}/api/products`, 
                              product);
  }


  updateProduct(product: Product): Observable<Product> {
    return this.http
               .put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`, 
                              product);
  }

  // put and post return updated records from service

  saveProduct(product: Product): Observable<Product> {
    if (product.id) { // if id exist, use put method to update
      return this.updateProduct(product);
    }

    // else use post to create new product
    return this.createProduct(product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http
               .delete<any>(`${environment.apiEndPoint}/api/products/${id}`)
  }

  getBrands(): Observable<Brand[]> {
    return this.http
               .get<Brand[]>(`${environment.apiEndPoint}/api/brands`);
  }
}
