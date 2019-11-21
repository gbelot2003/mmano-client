import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotorComponent } from './promotor.component';

describe('PromotorComponent', () => {
  let component: PromotorComponent;
  let fixture: ComponentFixture<PromotorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
