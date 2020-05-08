import { TestBed } from '@angular/core/testing';

import { StatserviceService } from './statservice.service';

describe('StatserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatserviceService = TestBed.get(StatserviceService);
    expect(service).toBeTruthy();
  });
});
