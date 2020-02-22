import { TestBed } from '@angular/core/testing';

import { YearSlicingUtilService } from './year-slicing-util.service';

describe('YearSlicingUtilService', () => {
  let service: YearSlicingUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearSlicingUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
