// product.module.ts
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductHomeComponent } from './components/product-home/product-home.component';

import {Routes, RouterModule} from  '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    component: ProductHomeComponent,
    children: [ // nested navigation
        {
          path: '', // default
          component: ProductListComponent
        },

        {
          path: 'create',
          component: ProductEditComponent
        },
        {
          path: 'edit/:id',
          component: ProductEditComponent
        }
    ]
  }
];

@NgModule({
  declarations: [ProductListComponent, ProductEditComponent, ProductHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ProductModule { }
