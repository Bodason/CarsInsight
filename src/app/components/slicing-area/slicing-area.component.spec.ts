import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicingAreaComponent } from './slicing-area.component';

describe('SlicingAreaComponent', () => {
  let component: SlicingAreaComponent;
  let fixture: ComponentFixture<SlicingAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlicingAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlicingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
