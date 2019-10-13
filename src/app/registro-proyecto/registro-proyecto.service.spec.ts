import { TestBed } from '@angular/core/testing';

import { RegistroProyectoService } from './registro-proyecto.service';

describe('RegistroProyectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroProyectoService = TestBed.get(RegistroProyectoService);
    expect(service).toBeTruthy();
  });
});
