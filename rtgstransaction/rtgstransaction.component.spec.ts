import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTGSTransactionComponent } from './rtgstransaction.component';

describe('RTGSTransactionComponent', () => {
  let component: RTGSTransactionComponent;
  let fixture: ComponentFixture<RTGSTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTGSTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RTGSTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
