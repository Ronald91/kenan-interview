import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunWithFormsComponent } from './fun-with-forms.component';

describe('FunWithFormsComponent', () => {
  let component: FunWithFormsComponent;
  let fixture: ComponentFixture<FunWithFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunWithFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunWithFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
