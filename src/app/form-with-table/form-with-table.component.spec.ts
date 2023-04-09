import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithTableComponent } from './form-with-table.component';

describe('FormWithTableComponent', () => {
  let component: FormWithTableComponent;
  let fixture: ComponentFixture<FormWithTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWithTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
