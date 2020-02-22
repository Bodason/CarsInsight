import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSlicingAreaComponent } from './brand-slicing-area.component';

describe('BrandSlicingAreaComponent', () => {
  let component: BrandSlicingAreaComponent;
  let fixture: ComponentFixture<BrandSlicingAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandSlicingAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSlicingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
