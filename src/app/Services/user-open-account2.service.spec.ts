import { TestBed } from '@angular/core/testing';

import { UserOpenAccount2Service } from './user-open-account2.service';

describe('UserOpenAccount2Service', () => {
  let service: UserOpenAccount2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserOpenAccount2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
