import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestSubmittedComponent} from './request-submitted.component';

describe('RequestSubmittedComponent', () => {
  let component: RequestSubmittedComponent;
  let fixture: ComponentFixture<RequestSubmittedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestSubmittedComponent]
    });
    fixture = TestBed.createComponent(RequestSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
