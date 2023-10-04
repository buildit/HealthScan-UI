import {TestBed} from '@angular/core/testing';
import {CanActivateFn} from '@angular/router';

import {barcodeGuard} from './barcode.guard';

describe('barcodeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => barcodeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
