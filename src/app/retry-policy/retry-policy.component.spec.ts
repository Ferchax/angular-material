import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryPolicyComponent } from './retry-policy.component';

describe('RetryPolicyComponent', () => {
  let component: RetryPolicyComponent;
  let fixture: ComponentFixture<RetryPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetryPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetryPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
