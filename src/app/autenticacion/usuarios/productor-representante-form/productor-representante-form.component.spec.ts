import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorRepresentanteFormComponent } from './productor-representante-form.component';

describe('ProductorRepresentanteFormComponent', () => {
  let component: ProductorRepresentanteFormComponent;
  let fixture: ComponentFixture<ProductorRepresentanteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorRepresentanteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorRepresentanteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
