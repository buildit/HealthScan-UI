import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseResultsComponentComponent } from './base-results-component.component';

describe('BaseResultsComponentComponent', () => {
  let component: BaseResultsComponentComponent;
  let fixture: ComponentFixture<BaseResultsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseResultsComponentComponent]
    });
    fixture = TestBed.createComponent(BaseResultsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
