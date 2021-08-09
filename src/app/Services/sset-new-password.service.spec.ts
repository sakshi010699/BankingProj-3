import { TestBed } from '@angular/core/testing';

import { SSetNewPasswordService } from './sset-new-password.service';

describe('SSetNewPasswordService', () => {
  let service: SSetNewPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSetNewPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
