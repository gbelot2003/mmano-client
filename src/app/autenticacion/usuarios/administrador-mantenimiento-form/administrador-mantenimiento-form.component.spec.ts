import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorMantenimientoFormComponent } from './administrador-mantenimiento-form.component';

describe('AdministradorMantenimientoFormComponent', () => {
  let component: AdministradorMantenimientoFormComponent;
  let fixture: ComponentFixture<AdministradorMantenimientoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorMantenimientoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorMantenimientoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
