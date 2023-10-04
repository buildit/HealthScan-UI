import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { scanTypeGuard } from './scan-type.guard';

describe('scanTypeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => scanTypeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
