import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycComponentComponent } from './kyc-component.component';

describe('KycComponentComponent', () => {
  let component: KycComponentComponent;
  let fixture: ComponentFixture<KycComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
