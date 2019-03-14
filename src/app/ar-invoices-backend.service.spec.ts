import { TestBed } from '@angular/core/testing';

import { ArInvoicesBackendService } from './ar-invoices-backend.service';

describe('ArInvoicesBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArInvoicesBackendService = TestBed.get(ArInvoicesBackendService);
    expect(service).toBeTruthy();
  });
});
