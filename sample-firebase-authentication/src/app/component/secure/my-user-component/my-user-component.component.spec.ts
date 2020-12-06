import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUserComponentComponent } from './my-user-component.component';

describe('MyUserComponentComponent', () => {
  let component: MyUserComponentComponent;
  let fixture: ComponentFixture<MyUserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUserComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
