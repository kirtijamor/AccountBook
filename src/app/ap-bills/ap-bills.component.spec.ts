import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApBillsComponent } from './ap-bills.component';

describe('ApBillsComponent', () => {
  let component: ApBillsComponent;
  let fixture: ComponentFixture<ApBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
