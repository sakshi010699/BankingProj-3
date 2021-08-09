import { TestBed } from '@angular/core/testing';

import { AddBeneficiaryDetailsService } from './add-beneficiary-details.service';

describe('AddBeneficiaryDetailsService', () => {
  let service: AddBeneficiaryDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBeneficiaryDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
