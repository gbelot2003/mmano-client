import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorIndividualComponent } from './productor-individual.component';

describe('ProductorIndividualComponent', () => {
  let component: ProductorIndividualComponent;
  let fixture: ComponentFixture<ProductorIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
