import { TestBed } from '@angular/core/testing';

import { FireDetectionService } from './fire-detection.service';

describe('FireDetectionService', () => {
  let service: FireDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
