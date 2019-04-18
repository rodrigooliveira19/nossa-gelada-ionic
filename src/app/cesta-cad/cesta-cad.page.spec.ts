import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaCadPage } from './cesta-cad.page';

describe('CestaCadPage', () => {
  let component: CestaCadPage;
  let fixture: ComponentFixture<CestaCadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CestaCadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CestaCadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
