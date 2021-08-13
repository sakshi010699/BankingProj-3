import { TestBed } from '@angular/core/testing';

import { SNetbankingUserService } from './s-netbanking-user.service';

describe('SNetbankingUserService', () => {
  let service: SNetbankingUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SNetbankingUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
