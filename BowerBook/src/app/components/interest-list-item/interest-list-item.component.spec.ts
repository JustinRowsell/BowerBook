import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestListItemComponent } from './interest-list-item.component';

describe('InterestListItemComponent', () => {
  let component: InterestListItemComponent;
  let fixture: ComponentFixture<InterestListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
