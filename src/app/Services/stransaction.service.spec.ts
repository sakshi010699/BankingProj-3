import { TestBed } from '@angular/core/testing';

import { STransactionService } from './stransaction.service';

describe('STransactionService', () => {
  let service: STransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
