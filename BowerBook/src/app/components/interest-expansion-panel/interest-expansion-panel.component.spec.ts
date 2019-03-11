import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestExpansionPanelComponent } from './interest-expansion-panel.component';

describe('InterestExpansionPanelComponent', () => {
  let component: InterestExpansionPanelComponent;
  let fixture: ComponentFixture<InterestExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
