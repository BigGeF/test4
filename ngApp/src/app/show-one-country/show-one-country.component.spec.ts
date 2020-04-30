import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneCountryComponent } from './show-one-country.component';

describe('ShowOneCountryComponent', () => {
  let component: ShowOneCountryComponent;
  let fixture: ComponentFixture<ShowOneCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOneCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
