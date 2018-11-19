import { TestBed, inject } from '@angular/core/testing';

import { SingletonutilityService } from './singletonutility.service';

describe('SingletonutilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingletonutilityService]
    });
  });

  it('should be created', inject([SingletonutilityService], (service: SingletonutilityService) => {
    expect(service).toBeTruthy();
  }));
});
