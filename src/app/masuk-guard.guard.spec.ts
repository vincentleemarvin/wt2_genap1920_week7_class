import { TestBed } from '@angular/core/testing';

import { MasukGuardGuard } from './masuk-guard.guard';

describe('MasukGuardGuard', () => {
  let guard: MasukGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MasukGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
