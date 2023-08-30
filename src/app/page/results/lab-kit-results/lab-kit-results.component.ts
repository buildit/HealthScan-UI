import {Component, Injector} from '@angular/core';
import {BarcodeCategory, LabKit, LabKitForm} from "../../../model/Barcode.model";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {BaseResultsComponent} from "../base-results-component/base-results-component.component";

@Component({
  selector: 'app-lab-kit-results',
  templateUrl: './lab-kit-results.component.html',
  styleUrls: ['./lab-kit-results.component.scss']
})
export class LabKitResultsComponent extends BaseResultsComponent<LabKit> {
  barcodeCategory: BarcodeCategory = 'Lab Kit';
  formModel = LabKitForm;

  constructor(injector: Injector) {
    super(injector);
  }

  populateForm(form: FormGroup, labKit: LabKit): void {
    form.get('barcodeItem.barcode')?.setValue(labKit.barcodeItem.barcode);
    form.get('barcodeItem.category')?.setValue(labKit.barcodeItem.barcodeType);

    // Populate other fields
    form.get('kitName')?.setValue(labKit.kitName);
    form.get('instructions')?.setValue(labKit.instructions);
    form.get('manufacturer')?.setValue(labKit.manufacturer);
    form.get('intendedUse')?.setValue(labKit.intendedUse);

    const componentsArray = form.get('components') as FormArray;
    componentsArray.clear();

    labKit.components.forEach(component => {
      componentsArray.push(new FormControl(component, Validators.required));
    });
  }

  mapFormToModel(form: FormGroup): LabKit {
    const model: LabKit = {
      barcodeItem: {
        barcode: '',
        barcodeType: 'Lab Kit',
      },
      kitName: '',
      instructions: '',
      manufacturer: '',
      intendedUse: '',
      components: []
    };

    const barcodeItem = form.get('barcodeItem');
    if (barcodeItem) {
      model.barcodeItem.barcode = barcodeItem.get('barcode')?.value || '';
      model.barcodeItem.barcodeType = barcodeItem.get('category')?.value || '';
    }

    model.kitName = form.get('kitName')?.value || '';
    model.instructions = form.get('instructions')?.value || '';
    model.manufacturer = form.get('manufacturer')?.value || '';
    model.intendedUse = form.get('intendedUse')?.value || '';

    const componentsArray = form.get('components') as FormArray;
    model.components = componentsArray.value || [];

    return model;
  }


  addComponent() {
    (this.formModel.get('components') as FormArray).push(new FormControl('', Validators.required));
  }

  removeComponent(index: number) {
    (this.formModel.get('components') as FormArray).removeAt(index);
  }
}
