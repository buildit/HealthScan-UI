import { TestBed } from '@angular/core/testing';

import { HealthscanGatewayService } from './healthscan-gateway.service';

describe('HealthscanGatewayService', () => {
  let service: HealthscanGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthscanGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
