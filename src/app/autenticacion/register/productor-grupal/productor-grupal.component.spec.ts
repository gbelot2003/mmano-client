import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorGrupalComponent } from './productor-grupal.component';

describe('ProductorGrupalComponent', () => {
  let component: ProductorGrupalComponent;
  let fixture: ComponentFixture<ProductorGrupalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorGrupalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorGrupalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
