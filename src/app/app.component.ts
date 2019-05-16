// app.component.ts
import {Component, OnInit} from '@angular/core';

@Component({
    // meta data for angular, used by Angular runtime
    // custom html tag/element name <app-root>
    selector: 'app-root',
    // html view
    templateUrl: 'app.component.html',
    // scopped css/style, only for app component
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent implements OnInit {
    // models
    appTitle = 'Product App';

    companyName = 'SAP';
    copyrightYear = 2018;

    // angular create instance for the component
    // 1. constructor called first
    constructor() {
        console.log('AppComponent created');
    }

    // 2. View is loaded into browser

    // 3. ngOnInit called
    ngOnInit() {
        console.log('AppComponent ngOnInit');
    }

    handleHello(msg: String) {
      //  alert(msg);
      console.log(msg);
    }
}
