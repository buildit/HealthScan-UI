import {Component, OnInit} from '@angular/core';
import {Medication, MedicationForm} from "../../model/Barcode.model";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-medication-results',
  templateUrl: './medication-results.component.html',
  styleUrls: ['./medication-results.component.scss']
})
export class MedicationResultsComponent implements OnInit {
  medicationForm: FormGroup = MedicationForm;
  requestId: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.requestId = uuidv4();
    const categoryControl = this.medicationForm.controls['barcodeItem'].get('category');
    const barcodeControl = this.medicationForm.controls['barcodeItem'].get('barcode');
    const barcodeValue = this.route.snapshot.paramMap.get('barcode');

    if (barcodeControl && barcodeValue && categoryControl) {
      barcodeControl.setValue(barcodeValue);
      categoryControl.setValue('Medication');
    }
  }

  submitForm(): void {
    this.router.navigate(['/request-submitted'], {queryParams: {requestId: this.requestId}});
  }
}
