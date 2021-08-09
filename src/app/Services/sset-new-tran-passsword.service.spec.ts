import { TestBed } from '@angular/core/testing';

import { SSetNewTranPassswordService } from './sset-new-tran-passsword.service';

describe('SSetNewTranPassswordService', () => {
  let service: SSetNewTranPassswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSetNewTranPassswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
