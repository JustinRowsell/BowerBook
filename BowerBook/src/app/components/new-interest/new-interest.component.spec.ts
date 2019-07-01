import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInterestComponent } from './new-interest.component';

describe('NewInterestComponent', () => {
  let component: NewInterestComponent;
  let fixture: ComponentFixture<NewInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
