import { TestBed } from '@angular/core/testing';

import { MunicipioServiceService } from './municipio-service.service';

describe('MunicipioServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MunicipioServiceService = TestBed.get(MunicipioServiceService);
    expect(service).toBeTruthy();
  });
});
