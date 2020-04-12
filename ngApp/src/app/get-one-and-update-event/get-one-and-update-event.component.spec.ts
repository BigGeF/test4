import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneAndUpdateEventComponent } from './get-one-and-update-event.component';

describe('GetOneAndUpdateEventComponent', () => {
  let component: GetOneAndUpdateEventComponent;
  let fixture: ComponentFixture<GetOneAndUpdateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOneAndUpdateEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneAndUpdateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
