import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderserviceComponent } from './headerservice.component';

describe('HeaderserviceComponent', () => {
  let component: HeaderserviceComponent;
  let fixture: ComponentFixture<HeaderserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
