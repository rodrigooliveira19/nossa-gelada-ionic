import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaListPage } from './marca-list.page';

describe('MarcaListPage', () => {
  let component: MarcaListPage;
  let fixture: ComponentFixture<MarcaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
