import {Component, OnInit} from '@angular/core';
import {LabKitForm} from "../../model/Barcode.model";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-lab-kit-results',
  templateUrl: './lab-kit-results.component.html',
  styleUrls: ['./lab-kit-results.component.scss']
})
export class LabKitResultsComponent implements OnInit {
  labKitForm: FormGroup = LabKitForm;
  requestId: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.requestId = uuidv4();
    const categoryControl = this.labKitForm.controls['barcodeItem'].get('category');
    const barcodeControl = this.labKitForm.controls['barcodeItem'].get('barcode');
    const barcodeValue = this.route.snapshot.paramMap.get('barcode');

    if (barcodeControl && barcodeValue && categoryControl) {
      barcodeControl.setValue(barcodeValue);
      categoryControl.setValue('Lab Kit');
    }
  }

  submitForm(): void {
    this.router.navigate(['/request-submitted'], {queryParams: {requestId: this.requestId}});
  }
}
