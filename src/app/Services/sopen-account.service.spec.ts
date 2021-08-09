import { TestBed } from '@angular/core/testing';

import { SOpenAccountService } from './sopen-account.service';

describe('SOpenAccountService', () => {
  let service: SOpenAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SOpenAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
