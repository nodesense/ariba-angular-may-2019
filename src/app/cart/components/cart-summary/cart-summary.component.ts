import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  amount: number;
  
  totalItems$: Observable<number>;

  constructor(private cartService: CartService) {
      // this.amount = this.cartService.amount;
      
      this.totalItems$ = this.cartService.totalItems$;
   }

  ngOnInit() {
    console.log('cart summary ng init begin');
    // the function in subscription is invoked wheb subject.next called
    this.cartService
        .amount$
        .subscribe( newAmount => {
          console.log('cart summary subscribe amount', newAmount);
          this.amount = newAmount;
        });

    console.log('cart summary ng init end');
  }

}
