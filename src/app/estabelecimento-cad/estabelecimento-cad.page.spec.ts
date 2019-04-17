import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoCadPage } from './estabelecimento-cad.page';

describe('EstabelecimentoCadPage', () => {
  let component: EstabelecimentoCadPage;
  let fixture: ComponentFixture<EstabelecimentoCadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabelecimentoCadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoCadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
