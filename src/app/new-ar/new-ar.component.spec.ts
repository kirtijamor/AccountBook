import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArComponent } from './new-ar.component';

describe('NewArComponent', () => {
  let component: NewArComponent;
  let fixture: ComponentFixture<NewArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
