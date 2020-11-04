import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangesViewComponent } from './ranges-view.component';

describe('RangesViewComponent', () => {
  let component: RangesViewComponent;
  let fixture: ComponentFixture<RangesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
