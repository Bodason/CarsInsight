import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsAreaComponent } from './insights-area.component';

describe('InsightsAreaComponent', () => {
  let component: InsightsAreaComponent;
  let fixture: ComponentFixture<InsightsAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
