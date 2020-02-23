import { TestBed } from '@angular/core/testing';

import { BarGraphUtilService } from './bar-graph-util.service';

describe('BarGraphUtilService', () => {
  let service: BarGraphUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarGraphUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
