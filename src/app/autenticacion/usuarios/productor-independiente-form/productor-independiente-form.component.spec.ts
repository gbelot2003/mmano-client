import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorIndependienteFormComponent } from './productor-independiente-form.component';

describe('ProductorIndependienteFormComponent', () => {
  let component: ProductorIndependienteFormComponent;
  let fixture: ComponentFixture<ProductorIndependienteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorIndependienteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorIndependienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
