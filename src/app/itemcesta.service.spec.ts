import { TestBed } from '@angular/core/testing';

import { ItemcestaService } from './itemcesta.service';

describe('ItemcestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemcestaService = TestBed.get(ItemcestaService);
    expect(service).toBeTruthy();
  });
});
