import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetbankingRegisterComponent } from './netbanking-register.component';

describe('NetbankingRegisterComponent', () => {
  let component: NetbankingRegisterComponent;
  let fixture: ComponentFixture<NetbankingRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetbankingRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetbankingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
