import { TestBed } from '@angular/core/testing';

import { HelloGuard } from './hello.guard';

describe('HelloGuard', () => {
  let guard: HelloGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HelloGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
