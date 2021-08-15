import { TestBed } from '@angular/core/testing';

import { SWindowService } from './s-window.service';

describe('SWindowService', () => {
  let service: SWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
