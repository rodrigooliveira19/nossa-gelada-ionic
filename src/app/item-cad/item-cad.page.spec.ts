import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCadPage } from './item-cad.page';

describe('ItemCadPage', () => {
  let component: ItemCadPage;
  let fixture: ComponentFixture<ItemCadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
