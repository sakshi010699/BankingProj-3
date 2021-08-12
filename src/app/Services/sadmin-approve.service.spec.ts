import { TestBed } from '@angular/core/testing';

import { SadminApproveService } from './sadmin-approve.service';

describe('SadminApproveService', () => {
  let service: SadminApproveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SadminApproveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
