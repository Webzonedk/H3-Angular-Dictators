/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HandleDictatorsService } from './handle-dictators.service';

describe('Service: HandleDictators', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleDictatorsService]
    });
  });

  it('should ...', inject([HandleDictatorsService], (service: HandleDictatorsService) => {
    expect(service).toBeTruthy();
  }));
});
