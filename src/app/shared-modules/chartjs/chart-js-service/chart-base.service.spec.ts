import { TestBed, inject } from '@angular/core/testing';

import { ChartBaseService } from './chart-base.service';

describe('ChartBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartBaseService]
    });
  });

  it('should be created', inject([ChartBaseService], (service: ChartBaseService) => {
    expect(service).toBeTruthy();
  }));
});
