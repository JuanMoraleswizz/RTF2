import { TestBed } from '@angular/core/testing';

import { RegistroParticipantesService } from './registro-participantes.service';

describe('RegistroParticipantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroParticipantesService = TestBed.get(RegistroParticipantesService);
    expect(service).toBeTruthy();
  });
});
