import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { CartItem } from '../models/cart-item';
// fdescribe
describe('CartService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('should add new item ', () => {
    const service: CartService = TestBed.get(CartService);
    const cartItem = new CartItem(1, 'p1', 100, 1);
    service.addItem(cartItem);
    expect(service.amount).toBe(100);
    expect(service.totalItems).toBe(1);
  });

});
