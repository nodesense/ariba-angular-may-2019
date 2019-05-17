// product.service.spec.ts

import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule,   // mock module for HttpClientModule
        HttpTestingController // shall receive REST calls/ respond to calls
      } from '@angular/common/http/testing';

import { environment } from './../../../environments/environment';

import { ProductService } from './product.service';
import { Product } from '../models/product';


fdescribe('ProductService', () => {
  let productService: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // inject HttpClient Mock in place of HttpClient
      providers: [ProductService]
    });

    // Injected mock http client 
    productService = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', 
                inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should return good response with data', (done) => {


    productService.getProducts()
                  .subscribe ( products => {
                    expect(products.length).toBe(2);
                    expect(products).toEqual(<Product[]> [{id: 1, price: 1000}, 
                                                          {id: 2, price: 2000}]);
                    //expect(products[0].price).toBe(1000);
                    done();
                  });

    const productsRequest = httpMock.expectOne(`${environment.apiEndPoint}/api/products`);
    // respond with json data
    productsRequest.flush([{id: 1, price: 1000}, 
                           {id: 2, price: 2000}]);  
    
    // let brandsRequest = httpMock.expectOne('http://localhost:7070/api/brands');
    // // respond with json data
    // brandsRequest.flush([{id: 100}]);  
 
    httpMock.verify();
  });


  it('should return good one product', (done) => {
     
    productService.getProduct(100)
                  .subscribe ( product => {
                    expect(product.id).toBe(100);
                    done();
                  });

    const productsRequest = httpMock.expectOne(`${environment.apiEndPoint}/api/products/100`);
    productsRequest.flush({id: 100});
 
    httpMock.verify();
  });

});