// product-list.component.spec.ts

import { FormsModule } from '@angular/forms';
import { CartModule } from './../../../cart/cart.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product';

import { ProductListComponent } from '../product-list/product-list.component';
import { SharedModule } from '../../../shared/shared.module';

fdescribe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;
  let element: any;

  class ProductMockService {
    constructor() {
      console.log('***MOCK SERVICE CREATED');
    }

    getProducts(): Observable<Product[]>  {
      console.log('***MOCKED SERVICE ');
      return of(<Product[]> [{id: 1, name: 'Nexus Phone', price: 10000, year: 2018}]);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule.forRoot([]),
        SharedModule,
        CartModule,
        FormsModule

      ],
      declarations: [ ProductListComponent ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {
          provide: ProductService, // not created
          useClass: ProductMockService // created, injected
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;

    productService = fixture.debugElement.injector.get(ProductService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    element = fixture.nativeElement;

    expect(element.querySelectorAll('tr')[1].textContent)
          .toContain('Nexus Phone');

    
    expect(element.querySelectorAll('tr')[1].textContent)
    .toContain('10000');


    expect(element.querySelectorAll('tr')[1]
                   .querySelectorAll('td')[1] // price column
                   .textContent)
                  .toContain('10000');

    expect(element.querySelectorAll('tr')[1]
    .querySelectorAll('td')[2] // year column
    .textContent)
    .toContain('2018');

  });
});