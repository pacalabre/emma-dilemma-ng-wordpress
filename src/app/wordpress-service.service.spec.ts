import { TestBed } from '@angular/core/testing';

import { WordpressServiceService } from './wordpress-service.service';

describe('WordpressServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordpressServiceService = TestBed.get(WordpressServiceService);
    expect(service).toBeTruthy();
  });
});
