import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorGrupalDashComponent } from './productor-grupal-dash.component';

describe('ProductorGrupalDashComponent', () => {
  let component: ProductorGrupalDashComponent;
  let fixture: ComponentFixture<ProductorGrupalDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorGrupalDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorGrupalDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
