import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerQuickAddComponent } from './customer-quick-add.component';

describe('CustomerQuickAddComponent', () => {
  let component: CustomerQuickAddComponent;
  let fixture: ComponentFixture<CustomerQuickAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerQuickAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerQuickAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
