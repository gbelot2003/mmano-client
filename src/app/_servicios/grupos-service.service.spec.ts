import { TestBed } from '@angular/core/testing';

import { GruposServiceService } from './grupos-service.service';

describe('GruposServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GruposServiceService = TestBed.get(GruposServiceService);
    expect(service).toBeTruthy();
  });
});
