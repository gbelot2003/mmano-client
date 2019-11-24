import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorIndividualDashComponent } from './productor-individual-dash.component';

describe('ProductorIndividualDashComponent', () => {
  let component: ProductorIndividualDashComponent;
  let fixture: ComponentFixture<ProductorIndividualDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorIndividualDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorIndividualDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
