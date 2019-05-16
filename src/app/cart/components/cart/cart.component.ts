import { CartItem } from './../../models/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: CartItem[] = [];

  // Angular create instance for cart Service
  // if instance already present, inject the same into cart
  // inject the instance into cart component
  constructor(private cartService: CartService) {
    console.log('Cart component created');

    this.items = this.cartService.items;
  }

  ngOnInit() {
  }

  addItem() {
     const id = Math.floor(Math.random() * 1000000);
     const item = new CartItem(id,
                              `Product ${id}`,
                              Math.floor(Math.random() * 100),
                              1);
    this.cartService.addItem(item);
  }

  empty() {
    this.cartService.empty();
  }

  incr(item: CartItem) {
    this.cartService.updateItem(item.id, item.qty + 1);
  }

  decr(item: CartItem) {
    if (item.qty <= 0) {
      return;
    }

    this.cartService.updateItem(item.id, item.qty - 1);
  }

  deleteItem(id: number) {
    this.cartService.removeItem(id);
  }

}
