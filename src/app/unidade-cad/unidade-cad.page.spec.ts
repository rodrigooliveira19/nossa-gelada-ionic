import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeCadPage } from './unidade-cad.page';

describe('UnidadeCadPage', () => {
  let component: UnidadeCadPage;
  let fixture: ComponentFixture<UnidadeCadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeCadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeCadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
