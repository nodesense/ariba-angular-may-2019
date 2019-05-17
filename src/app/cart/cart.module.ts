// cart.module.ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cart/list',
    component: CartComponent
  },
  {
    path: 'cart/checkout',
    component: CheckoutComponent
  }
];


@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartSummaryComponent,
    CheckoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
