import { Component, OnInit,
          Input,
          Output,
          EventEmitter
        } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // Input helps the component to accept 
  // data from parent component
  // property binding

  //<app-footer company="SAP"
  //            [year]="2018 + 1"             

  @Input()
  company: string;

  @Input()
  year: number;

   //<app-footer (footerEvent)="handlerFunction($event)"

  // Child to parent communication - Output
  // always done using event binding () + EventEmitter
  @Output()
  footerEvent: EventEmitter<string> = new EventEmitter ();

  // events are emitted from child component
  // events are subscribed in parent component

  today = new Date();
  discount = 1000000/3.0;

  constructor() { }

  ngOnInit() {
    console.log('typeof year', typeof this.year);
    // this.sayHello();
  }

  sayHello() {
    // publish/emit an event
    this.footerEvent.emit('Hello from Footer');
  }

}
