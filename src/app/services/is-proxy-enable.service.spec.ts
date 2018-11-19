import { TestBed, inject } from '@angular/core/testing';

import { IsProxyEnableService } from './is-proxy-enable.service';

describe('IsProxyEnableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsProxyEnableService]
    });
  });

  it('should be created', inject([IsProxyEnableService], (service: IsProxyEnableService) => {
    expect(service).toBeTruthy();
  }));
});
