import { TestBed } from '@angular/core/testing';

import { InsightsUtilService } from './insights-util.service';

describe('InsightsUtilService', () => {
  let service: InsightsUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsightsUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
