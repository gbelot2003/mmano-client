import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteFormComponent } from './gerente-form.component';

describe('GerenteFormComponent', () => {
  let component: GerenteFormComponent;
  let fixture: ComponentFixture<GerenteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
