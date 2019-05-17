// product-list.component.ts

import { CartItem } from './../../../cart/models/cart-item';
import { Product } from './../../models/product';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products$: Observable<Product[]>;

  //products: Product[];

 // subscription: Subscription;

  constructor(private productService: ProductService,
              private cartService: CartService) {

   }

  ngOnInit() {
    this.products$ = this.productService.getProducts();

  //  this.subscription = this.productService.getProducts()
  //       .subscribe (products => {
  //         console.log('got product data ', products);
  //         this.products = products;
  //       });
  }


  ngOnDestroy() {
    console.log('product-list destroy');
   // this.subscription.unsubscribe();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
        .subscribe( result => {
            console.log('product deleted ', id);
            this.products$ = this.productService.getProducts();
        });
  }

  addToCart(product: Product) {
    const cartItem = new CartItem(product.id,
                                   product.name,
                                   product.price,
                                   1);

    this.cartService.addItem(cartItem);
  }

}
