import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { memberIdGuard } from './member-id.guard';

describe('memberIdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => memberIdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
