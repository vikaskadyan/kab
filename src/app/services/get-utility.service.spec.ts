import { TestBed, inject } from '@angular/core/testing';

import { GetUtilityService } from './get-utility.service';

describe('GetUtilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUtilityService]
    });
  });

  it('should be created', inject([GetUtilityService], (service: GetUtilityService) => {
    expect(service).toBeTruthy();
  }));
});
