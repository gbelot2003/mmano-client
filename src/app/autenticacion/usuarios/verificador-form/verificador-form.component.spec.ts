import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificadorFormComponent } from './verificador-form.component';

describe('VerificadorFormComponent', () => {
  let component: VerificadorFormComponent;
  let fixture: ComponentFixture<VerificadorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
