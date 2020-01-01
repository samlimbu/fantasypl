import { TestBed, inject } from '@angular/core/testing';

import { HttpErrorInterceptor } from './http-interceptor.service';

describe('HttpErrorInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorInterceptor]
    });
  });

  it('should be created', inject([HttpErrorInterceptor], (service: HttpErrorInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
