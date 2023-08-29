import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LabKitResultsComponent} from './lab-kit-results.component';

describe('LabKitResultsComponent', () => {
  let component: LabKitResultsComponent;
  let fixture: ComponentFixture<LabKitResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabKitResultsComponent]
    });
    fixture = TestBed.createComponent(LabKitResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
