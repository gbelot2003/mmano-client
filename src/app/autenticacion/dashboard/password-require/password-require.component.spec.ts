import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRequireComponent } from './password-require.component';

describe('PasswordRequireComponent', () => {
  let component: PasswordRequireComponent;
  let fixture: ComponentFixture<PasswordRequireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordRequireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRequireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
