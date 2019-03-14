import { TestBed } from '@angular/core/testing';

import { ArInvoicesService } from './ar-invoices.service';

describe('ArInvoicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArInvoicesService = TestBed.get(ArInvoicesService);
    expect(service).toBeTruthy();
  });
});
