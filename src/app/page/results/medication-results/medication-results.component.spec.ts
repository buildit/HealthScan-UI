import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MedicationResultsComponent} from './medication-results.component';

describe('MedicationResultsComponent', () => {
  let component: MedicationResultsComponent;
  let fixture: ComponentFixture<MedicationResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicationResultsComponent]
    });
    fixture = TestBed.createComponent(MedicationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
