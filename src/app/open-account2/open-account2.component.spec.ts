import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAccount2Component } from './open-account2.component';

describe('OpenAccount2Component', () => {
  let component: OpenAccount2Component;
  let fixture: ComponentFixture<OpenAccount2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAccount2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAccount2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
