import { TestBed } from '@angular/core/testing';

import { NossaGeladaApiService } from './nossa-gelada-api.service';

describe('NossaGeladaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NossaGeladaApiService = TestBed.get(NossaGeladaApiService);
    expect(service).toBeTruthy();
  });
});
