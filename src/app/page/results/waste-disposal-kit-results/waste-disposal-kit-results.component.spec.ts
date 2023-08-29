import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WasteDisposalKitResultsComponent} from './waste-disposal-kit-results.component';

describe('WasteDisposalKitResultsComponent', () => {
  let component: WasteDisposalKitResultsComponent;
  let fixture: ComponentFixture<WasteDisposalKitResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WasteDisposalKitResultsComponent]
    });
    fixture = TestBed.createComponent(WasteDisposalKitResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
