import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangesModificationComponent } from './ranges-modification.component';

describe('RangesModificationComponent', () => {
  let component: RangesModificationComponent;
  let fixture: ComponentFixture<RangesModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangesModificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangesModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
