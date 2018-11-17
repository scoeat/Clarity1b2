import { TestBed } from '@angular/core/testing';

import { WakandaService } from './wakanda.service';

describe('WakandaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WakandaService = TestBed.get(WakandaService);
    expect(service).toBeTruthy();
  });
});
