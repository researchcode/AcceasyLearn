import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriterionDetailPage } from './criterion-detail.page';

describe('CriterionDetailPage', () => {
  let component: CriterionDetailPage;
  let fixture: ComponentFixture<CriterionDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriterionDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriterionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
