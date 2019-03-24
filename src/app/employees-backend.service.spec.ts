import { TestBed } from '@angular/core/testing';

import { EmployeesBackendService } from './employees-backend.service';

describe('EmployeesBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeesBackendService = TestBed.get(EmployeesBackendService);
    expect(service).toBeTruthy();
  });
});
