import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorSistemaFormComponent } from './administrador-sistema-form.component';

describe('AdministradorSistemaFormComponent', () => {
  let component: AdministradorSistemaFormComponent;
  let fixture: ComponentFixture<AdministradorSistemaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorSistemaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorSistemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
