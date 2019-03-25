import { TestBed } from '@angular/core/testing';

import { CustomersBackendService } from './customers-backend.service';

describe('CustomersBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomersBackendService = TestBed.get(CustomersBackendService);
    expect(service).toBeTruthy();
  });
});
