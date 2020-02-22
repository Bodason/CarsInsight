import { TestBed } from '@angular/core/testing';

import { CarsDataHandlerService } from './cars-data-handler.service';

describe('CarsDataHandlerService', () => {
  let service: CarsDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
