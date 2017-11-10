import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaureDetailComponent } from './dinosaure-detail.component';

describe('DinosaureDetailComponent', () => {
  let component: DinosaureDetailComponent;
  let fixture: ComponentFixture<DinosaureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
