import { TestBed } from '@angular/core/testing';

import { NebularFormlyService } from './nebular-formly.service';

describe('NebularFormlyService', () => {
  let service: NebularFormlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NebularFormlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
