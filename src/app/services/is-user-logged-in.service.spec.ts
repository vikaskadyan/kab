import { TestBed, inject } from '@angular/core/testing';

import { IsUserLoggedInService } from './is-user-logged-in.service';

describe('IsUserLoggedInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsUserLoggedInService]
    });
  });

  it('should be created', inject([IsUserLoggedInService], (service: IsUserLoggedInService) => {
    expect(service).toBeTruthy();
  }));
});
