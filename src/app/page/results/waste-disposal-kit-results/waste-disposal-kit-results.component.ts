import {Component, Injector} from '@angular/core';
import {BarcodeCategory, MedicationForm, WasteDisposalKit} from "../../../model/Barcode.model";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {BaseResultsComponent} from "../base-results-component/base-results-component.component";

@Component({
  selector: 'app-waste-disposal-kit-results',
  templateUrl: './waste-disposal-kit-results.component.html',
  styleUrls: ['./waste-disposal-kit-results.component.scss']
})
export class WasteDisposalKitResultsComponent extends BaseResultsComponent<WasteDisposalKit> {
  barcodeCategory: BarcodeCategory = 'Waste Disposal Kit';
  formModel = MedicationForm;

  constructor(injector: Injector) {
    super(injector);
  }

  mapFormToModel(form: FormGroup): WasteDisposalKit {
    const model: WasteDisposalKit = {
      barcodeItem: {
        barcode: '',
        barcodeType: 'Waste Disposal Kit'
      },
      kitType: '',
      disposalInstructions: '',
      handlingWarnings: '',
      contents: [],
      trackingInfo: {
        trackingId: '',
        status: ''
      }
    };

    const barcodeItem = form.get('barcodeItem');
    if (barcodeItem) {
      model.barcodeItem.barcode = barcodeItem.get('barcode')?.value || '';
      model.barcodeItem.barcodeType = barcodeItem.get('category')?.value || '';
    }

    model.kitType = form.get('kitType')?.value || '';
    model.disposalInstructions = form.get('disposalInstructions')?.value || '';
    model.handlingWarnings = form.get('handlingWarnings')?.value || '';

    const contentsArray = form.get('contents') as FormArray;
    model.contents = contentsArray.value || [];

    const trackingInfo = form.get('trackingInfo');
    if (trackingInfo) {
      model.trackingInfo.trackingId = trackingInfo.get('trackingNumber')?.value || '';
      model.trackingInfo.status = trackingInfo.get('status')?.value || '';
    }

    return model;
  }


  populateForm(form: FormGroup, wasteDisposalKit: WasteDisposalKit): void {
    form.get('barcodeItem.barcode')?.setValue(wasteDisposalKit.barcodeItem.barcode);
    form.get('barcodeItem.category')?.setValue(wasteDisposalKit.barcodeItem.barcodeType);

    form.get('kitType')?.setValue(wasteDisposalKit.kitType);
    form.get('disposalInstructions')?.setValue(wasteDisposalKit.disposalInstructions);
    form.get('handlingWarnings')?.setValue(wasteDisposalKit.handlingWarnings);

    // Populate the contents FormArray
    const contentsArray = form.get('contents') as FormArray;
    contentsArray.clear(); // Remove any existing elements

    wasteDisposalKit.contents.forEach(content => {
      contentsArray.push(new FormControl(content, Validators.required));
    });

    // Populate the trackingInfo group
    form.get('trackingInfo.trackingNumber')?.setValue(wasteDisposalKit.trackingInfo.trackingId);
    form.get('trackingInfo.status')?.setValue(wasteDisposalKit.trackingInfo.status);
  }
}
