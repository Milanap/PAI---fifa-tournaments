import { TestBed } from '@angular/core/testing';

import { TokenIcneptorService } from './token-icneptor.service';

describe('TokenIcneptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenIcneptorService = TestBed.get(TokenIcneptorService);
    expect(service).toBeTruthy();
  });
});
