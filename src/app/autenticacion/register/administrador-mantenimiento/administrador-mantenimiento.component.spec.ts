import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorMantenimientoComponent } from './administrador-mantenimiento.component';

describe('AdministradorMantenimientoComponent', () => {
  let component: AdministradorMantenimientoComponent;
  let fixture: ComponentFixture<AdministradorMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
