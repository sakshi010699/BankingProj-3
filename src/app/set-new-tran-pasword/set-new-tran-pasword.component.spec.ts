import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNewTranPaswordComponent } from './set-new-tran-pasword.component';

describe('SetNewTranPaswordComponent', () => {
  let component: SetNewTranPaswordComponent;
  let fixture: ComponentFixture<SetNewTranPaswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetNewTranPaswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNewTranPaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
