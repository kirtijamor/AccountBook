import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApComponent } from './new-ap.component';

describe('NewApComponent', () => {
  let component: NewApComponent;
  let fixture: ComponentFixture<NewApComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewApComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
