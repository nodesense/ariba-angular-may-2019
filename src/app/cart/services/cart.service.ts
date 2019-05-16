// cart.service.ts
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

// share data between components
// keep the data in memory, when component not present on the UI [routing]
// injectable into component, pipe, directive and another service
// implementing business logic
// implement API calls

import {Subject, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  amount = 0;
  // adding $ is convention
  // whenever amount get changed, we need to publish the value
  amount$: BehaviorSubject<number> = new BehaviorSubject(this.amount);

  totalItems = 0;
  totalItems$: BehaviorSubject<number> = new BehaviorSubject(this.totalItems);
  

  constructor() {
    console.log('cart service created');
  }

  recalculate() {
    let amount = 0;
    let totalItems = 0;

    for (const item of this.items) {
      amount += item.price * item.qty;
      totalItems += item.qty;
    }

    this.amount = amount;
    this.totalItems = totalItems;
    console.log('amount is ', amount);
    console.log('totalItems is ', totalItems);

    // publishing the amount value
    this.amount$.next(this.amount);
    this.totalItems$.next(this.totalItems);
  }

  addItem(item: CartItem) {
    this.items.push(item);
    
    this.recalculate();

  }

  removeItem(id: number) {
    const index = this.items.findIndex( item => item.id === id);
    if (index >= 0) {
      this.items.splice(index, 1);
    }

    this.recalculate();
  }

  updateItem(id: number, qty: number) {
    const item = this.items.find(itemR => itemR.id === id);
    if (item) {
      item.qty = qty;
    }
    this.recalculate();
  }

  empty() {
    this.items.splice(0, this.items.length);

    //this.items = [];
    this.recalculate();
  }
}
