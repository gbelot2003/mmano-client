import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotorFormComponent } from './promotor-form.component';

describe('PromotorFormComponent', () => {
  let component: PromotorFormComponent;
  let fixture: ComponentFixture<PromotorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
