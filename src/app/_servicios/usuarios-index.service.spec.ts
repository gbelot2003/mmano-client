import { TestBed } from '@angular/core/testing';

import { UsuariosIndexService } from './usuarios-index.service';

describe('UsuariosIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuariosIndexService = TestBed.get(UsuariosIndexService);
    expect(service).toBeTruthy();
  });
});
