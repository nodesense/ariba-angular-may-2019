// product-edit.component.ts
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Brand } from '../../models/brand';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  @ViewChild('productForm')
  form: NgForm;

  product: Product = new Product();
  brands$: Observable<Brand[]>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    // read the id from url
    const id = this.route.snapshot.params['id'];
    console.log('id is', id);

    if (id) {
      this.productService
          .getProduct(id)
          .subscribe( product => {
            this.product = product;
          });
    }

    this.brands$ = this.productService.getBrands();
  }

  save() {

    if (this.form.pristine) {
      alert('No changes found');
      return;
    }

    if (this.form.invalid) {
      alert('invalid form');
      return;
    }

    this.productService
        .saveProduct(this.product)
        .subscribe(savedProduct => {
          console.log('product saved successfully', savedProduct);
          this.router.navigate(['/', 'products']);
          // this.router.navigateByUrl('/products');
        });
  }

}
