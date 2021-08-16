import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInitiatedAccountComponent } from './display-initiated-account.component';

describe('DisplayInitiatedAccountComponent', () => {
  let component: DisplayInitiatedAccountComponent;
  let fixture: ComponentFixture<DisplayInitiatedAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayInitiatedAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInitiatedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
