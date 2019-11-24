import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorRepesentanteDashComponent } from './productor-repesentante-dash.component';

describe('ProductorRepesentanteDashComponent', () => {
  let component: ProductorRepesentanteDashComponent;
  let fixture: ComponentFixture<ProductorRepesentanteDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorRepesentanteDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorRepesentanteDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
