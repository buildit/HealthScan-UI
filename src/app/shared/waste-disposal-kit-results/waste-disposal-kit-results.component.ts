import {Component, EventEmitter, OnInit} from '@angular/core';
import {Medication, MedicationForm} from "../../model/Barcode.model";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-waste-disposal-kit-results',
  templateUrl: './waste-disposal-kit-results.component.html',
  styleUrls: ['./waste-disposal-kit-results.component.scss']
})
export class WasteDisposalKitResultsComponent implements OnInit {
  submit = new EventEmitter<Medication>();

  wasteDisposalKitForm: FormGroup = MedicationForm;
  requestId: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.requestId = uuidv4();
    const categoryControl = this.wasteDisposalKitForm.controls['barcodeItem'].get('category');
    const barcodeControl = this.wasteDisposalKitForm.controls['barcodeItem'].get('barcode');
    const barcodeValue = this.route.snapshot.paramMap.get('barcode');

    if (barcodeControl && barcodeValue && categoryControl) {
      barcodeControl.setValue(barcodeValue);
      categoryControl.setValue('Waste Disposal Kit');
    }
  }

  submitForm(): void {
    this.router.navigate(['/request-submitted'], {queryParams: {requestId: this.requestId}});
  }
}
