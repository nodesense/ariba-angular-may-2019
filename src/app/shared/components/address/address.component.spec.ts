import { LikeComponent } from './../like/like.component';
import { async,
         ComponentFixture, // wrapper for the component under test
         TestBed // test environment, help to create module
        } from '@angular/core/testing';

import { AddressComponent } from './address.component';

fdescribe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
   // test setup, called before runnign any it/test case
  beforeEach(async(() => {
    console.log('setting up test module');
    // create a module,
    TestBed.configureTestingModule({
      declarations: [ AddressComponent,
                      LikeComponent ],
      // imports, exports, providers, entryComponents
    })
    .compileComponents(); // take the html, jit compilation html to js
  }));

  beforeEach(() => {
    // create a component instance and also wrapper
    fixture = TestBed.createComponent(AddressComponent);
    // actual instance of the component
    component = fixture.componentInstance;
    // start the dirty checking, apply the changes on template
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('checking component created');
    expect(component).toBeTruthy();

    // nativeElement is dom element, who component
    const element: any = fixture.nativeElement;

    expect(element.querySelectorAll('p')[0].textContent)
    .toContain('My City Bangalore');
  });

  it('should check city changes ', () => {
    console.log('checking component created');
    expect(component).toBeTruthy();
    component.city = 'Mysore'; // value is in component 

    // force the update the template
    fixture.detectChanges();
 
    // nativeElement is dom element, who component
    const element: any = fixture.nativeElement;

    expect(element.querySelectorAll('p')[0].textContent)
    .toContain('My City Mysore');
  });

});
