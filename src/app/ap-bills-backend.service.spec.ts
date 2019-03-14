import { TestBed } from '@angular/core/testing';

import { ApBillsBackendService } from './ap-bills-backend.service';

describe('ApBillsBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApBillsBackendService = TestBed.get(ApBillsBackendService);
    expect(service).toBeTruthy();
  });
});
