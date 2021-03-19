import { TestBed } from '@angular/core/testing';

import { UserResolve } from './user.resolve';

describe('UserResolveService', () => {
  let service: UserResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
