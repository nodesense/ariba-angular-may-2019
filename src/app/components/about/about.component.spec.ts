import { async, 
  ComponentFixture, 
  TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { SharedModule } from './../../shared/shared.module';

fdescribe('AboutComponent', () => {
let component: AboutComponent;
let element: any;
let fixture: ComponentFixture<AboutComponent>;

beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ AboutComponent ],
imports: [SharedModule]
})
.compileComponents(); // JIT html to JS
}));

beforeEach(() => {
fixture = TestBed.createComponent(AboutComponent);
component = fixture.componentInstance;

fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
element = fixture.nativeElement;
expect(element.querySelectorAll('li').length)
                                .toBe(2);
});


it('should clear all li when toggle', () => {
expect(component).toBeTruthy();
element = fixture.nativeElement;
expect(element.querySelectorAll('li').length).toBe(2);

component.showMembers = false; // list should disappear

fixture.detectChanges();
expect(element.querySelectorAll('li').length).toBe(0);
})


it('should create add member', () => {
expect(component).toBeTruthy();
element = fixture.nativeElement;
component.addMember('Nila');
fixture.detectChanges();

expect(element.querySelectorAll('li').length).toBe(3);

expect(element.querySelectorAll('li')[2].textContent)
    .toContain('Nila');
})


it('should empty list', () => {
expect(component).toBeTruthy();
element = fixture.nativeElement;
component.empty();
fixture.detectChanges();

expect(element.querySelectorAll('li').length).toBe(0);
expect(element.querySelectorAll('ul').length).toBe(1);
});
});