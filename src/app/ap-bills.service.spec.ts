import { TestBed } from '@angular/core/testing';

import { ApBillsService } from './ap-bills.service';

describe('ApBillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApBillsService = TestBed.get(ApBillsService);
    expect(service).toBeTruthy();
  });
});
