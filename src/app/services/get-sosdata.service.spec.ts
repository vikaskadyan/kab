import { TestBed, inject } from '@angular/core/testing';

import { GetSosdataService } from './get-sosdata.service';

describe('GetSosdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSosdataService]
    });
  });

  it('should be created', inject([GetSosdataService], (service: GetSosdataService) => {
    expect(service).toBeTruthy();
  }));
});
