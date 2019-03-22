import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorQuickAddComponent } from './vendor-quick-add.component';

describe('VendorQuickAddComponent', () => {
  let component: VendorQuickAddComponent;
  let fixture: ComponentFixture<VendorQuickAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorQuickAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorQuickAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
