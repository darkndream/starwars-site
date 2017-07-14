import { TestBed, inject } from '@angular/core/testing';

import { SWApiService } from './swapi.service';

describe('SWApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SWApiService]
    });
  });

  it('should be created', inject([SWApiService], (service: SWApiService) => {
    expect(service).toBeTruthy();
  }));
});
