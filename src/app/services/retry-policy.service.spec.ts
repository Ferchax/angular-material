import { TestBed } from '@angular/core/testing';

import { RetryPolicyService } from './retry-policy.service';

describe('RetryPolicyService', () => {
  let service: RetryPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetryPolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
