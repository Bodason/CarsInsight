import { TestBed } from '@angular/core/testing';

import { BrandSlicingUtilService } from './brand-slicing-util.service';

describe('BrandSlicingUtilService', () => {
  let service: BrandSlicingUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandSlicingUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
