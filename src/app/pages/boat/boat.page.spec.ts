import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatPage } from './boat.page';

describe('BoatPage', () => {
  let component: BoatPage;
  let fixture: ComponentFixture<BoatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
