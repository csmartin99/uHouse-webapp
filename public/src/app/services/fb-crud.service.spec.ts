import { TestBed } from '@angular/core/testing';

import { FbCrudService } from './fb-crud.service';

describe('FbCrudService', () => {
  let service: FbCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
