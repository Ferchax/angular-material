import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGpt4Component } from './table-gpt4.component';

describe('TableGpt4Component', () => {
  let component: TableGpt4Component;
  let fixture: ComponentFixture<TableGpt4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGpt4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGpt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
