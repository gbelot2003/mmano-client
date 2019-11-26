import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorGrupalFormComponent } from './productor-grupal-form.component';

describe('ProductorGrupalFormComponent', () => {
  let component: ProductorGrupalFormComponent;
  let fixture: ComponentFixture<ProductorGrupalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorGrupalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorGrupalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
