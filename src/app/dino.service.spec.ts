import { TestBed, inject } from '@angular/core/testing';

import { DinoService } from './dino.service';

describe('DinoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinoService]
    });
  });

  it('should be created', inject([DinoService], (service: DinoService) => {
    expect(service).toBeTruthy();
  }));
});
