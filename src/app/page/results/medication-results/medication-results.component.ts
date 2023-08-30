import {Component, Injector} from '@angular/core';
import {BarcodeCategory, Medication, MedicationForm} from "../../../model/Barcode.model";
import {FormGroup} from "@angular/forms";
import {BaseResultsComponent} from "../base-results-component/base-results-component.component";

@Component({
  selector: 'app-medication-results',
  templateUrl: './medication-results.component.html',
  styleUrls: ['./medication-results.component.scss']
})
export class MedicationResultsComponent extends BaseResultsComponent<Medication> {
  barcodeCategory: BarcodeCategory = 'Medication';
  formModel = MedicationForm;

  constructor(injector: Injector) {
    super(injector);
  }

  mapFormToModel(form: FormGroup): Medication {
    const model: Medication = {
      barcodeItem: {
        barcode: '',
        barcodeType: 'Medication'
      },
      medicineName: '',
      dosage: '',
      expirationDate: new Date(),
      manufacturer: ''
    };

    const barcodeItem = form.get('barcodeItem');
    if (barcodeItem) {
      model.barcodeItem.barcode = barcodeItem.get('barcode')?.value || '';
      model.barcodeItem.barcodeType = barcodeItem.get('category')?.value || '';
    }

    model.medicineName = form.get('medicineName')?.value || '';
    model.dosage = form.get('dosage')?.value || '';
    model.expirationDate = form.get('expirationDate')?.value || new Date();
    model.manufacturer = form.get('manufacturer')?.value || '';

    return model;
  }


  populateForm(form: FormGroup, medication: Medication): void {
    form.get('barcodeItem.barcode')?.setValue(medication.barcodeItem.barcode);
    form.get('barcodeItem.category')?.setValue(medication.barcodeItem.barcodeType);

    form.get('medicineName')?.setValue(medication.medicineName);
    form.get('dosage')?.setValue(medication.dosage);
    form.get('expirationDate')?.setValue(medication.expirationDate);
    form.get('manufacturer')?.setValue(medication.manufacturer);
  }
}

