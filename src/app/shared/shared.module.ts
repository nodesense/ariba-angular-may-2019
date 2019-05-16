import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './components/like/like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [ // private to shared module
    AddressComponent,
    LikeComponent,
    HighlightDirective,
    PowerPipe,
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule
  ],

  // exports some components,pipes,directives for other modules
  exports: [
    AddressComponent,
    LikeComponent,
    HighlightDirective,
    PowerPipe,
    FilterPipe,
    SortPipe
  ]
})
export class SharedModule { }
