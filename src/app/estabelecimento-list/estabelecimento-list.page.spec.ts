import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoListPage } from './estabelecimento-list.page';

describe('EstabelecimentoListPage', () => {
  let component: EstabelecimentoListPage;
  let fixture: ComponentFixture<EstabelecimentoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabelecimentoListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
