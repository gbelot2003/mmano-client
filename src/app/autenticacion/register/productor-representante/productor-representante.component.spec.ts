import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorRepresentanteComponent } from './productor-representante.component';

describe('ProductorRepresentanteComponent', () => {
  let component: ProductorRepresentanteComponent;
  let fixture: ComponentFixture<ProductorRepresentanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorRepresentanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
