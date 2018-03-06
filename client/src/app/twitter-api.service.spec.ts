import { TestBed, inject } from '@angular/core/testing';

import { TwitterApiService } from './twitter-api.service';

describe('TwitterApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterApiService]
    });
  });

  it('should ...', inject([TwitterApiService], (service: TwitterApiService) => {
    expect(service).toBeTruthy();
  }));
});
