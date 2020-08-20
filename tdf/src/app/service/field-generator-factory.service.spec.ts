import { TestBed } from '@angular/core/testing';

import { FieldGeneratorFactoryService } from './field-generator-factory.service';

describe('FieldGeneratorFactoryService', () => {
  let service: FieldGeneratorFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldGeneratorFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
