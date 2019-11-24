import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificadorDashComponent } from './verificador-dash.component';

describe('VerificadorDashComponent', () => {
  let component: VerificadorDashComponent;
  let fixture: ComponentFixture<VerificadorDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificadorDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificadorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
