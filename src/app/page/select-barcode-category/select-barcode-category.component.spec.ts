import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectBarcodeCategoryComponent} from './select-barcode-category.component';

describe('SelectBarcodeCategoryComponent', () => {
  let component: SelectBarcodeCategoryComponent;
  let fixture: ComponentFixture<SelectBarcodeCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectBarcodeCategoryComponent]
    });
    fixture = TestBed.createComponent(SelectBarcodeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
