import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMantenimientoDashComponent } from './admin-mantenimiento-dash.component';

describe('AdminMantenimientoDashComponent', () => {
  let component: AdminMantenimientoDashComponent;
  let fixture: ComponentFixture<AdminMantenimientoDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMantenimientoDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMantenimientoDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
