import { TestBed } from '@angular/core/testing';

import { BanksBackendService } from './banks-backend.service';

describe('BanksBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanksBackendService = TestBed.get(BanksBackendService);
    expect(service).toBeTruthy();
  });
});
