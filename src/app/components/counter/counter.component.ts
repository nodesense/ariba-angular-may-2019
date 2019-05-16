import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count = 0;

  address = null;
  branchAddress = { city: 'Bangalore'};

  constructor() {
   }

  ngOnInit() {
   
  }

  increment() {
    console.trace('increment called');
    this.count++;
  }

  getValue() {
    console.log('getValue Called' + Math.random());
    return 10;
  }

}
