import { TestBed } from '@angular/core/testing';

import { PrcService } from './prc.service';

describe('PrcService', () => {
  let service: PrcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
