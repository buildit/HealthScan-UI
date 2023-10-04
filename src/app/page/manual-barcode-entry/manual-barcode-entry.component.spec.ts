import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ManualBarcodeEntryComponent} from './manual-barcode-entry.component';

describe('ManualBarcodeEntryComponent', () => {
  let component: ManualBarcodeEntryComponent;
  let fixture: ComponentFixture<ManualBarcodeEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualBarcodeEntryComponent]
    });
    fixture = TestBed.createComponent(ManualBarcodeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
