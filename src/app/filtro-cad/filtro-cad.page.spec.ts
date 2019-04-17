import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCadPage } from './filtro-cad.page';

describe('FiltroCadPage', () => {
  let component: FiltroCadPage;
  let fixture: ComponentFixture<FiltroCadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroCadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroCadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
