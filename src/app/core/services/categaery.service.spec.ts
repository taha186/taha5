import { TestBed } from '@angular/core/testing';

import { CategaeryService } from './categaery.service';

describe('CategaeryService', () => {
  let service: CategaeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategaeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
