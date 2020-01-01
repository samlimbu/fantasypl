import { TestBed, inject } from '@angular/core/testing';

import { NotificationWindowService } from './notification-window.service';

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationWindowService]
    });
  });

  it('should be created', inject([NotificationWindowService], (service: NotificationWindowService) => {
    expect(service).toBeTruthy();
  }));
});
