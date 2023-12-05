import { TestBed } from '@angular/core/testing';

import { PrisService } from './pris.service';

describe('PrisService', () => {
  let service: PrisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
