import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaCadPage } from './marca-cad.page';

describe('MarcaCadPage', () => {
  let component: MarcaCadPage;
  let fixture: ComponentFixture<MarcaCadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaCadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaCadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
