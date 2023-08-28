import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-manual-barcode-entry',
  templateUrl: './manual-barcode-entry.component.html',
  styleUrls: ['./manual-barcode-entry.component.scss']
})
export class ManualBarcodeEntryComponent implements OnInit {

  barcodeForm: FormGroup;
  barcodeCategory: string | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.barcodeForm = this.fb.group({
      barcode: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.barcodeCategory = params.get('barcodeCategory');
    });
  }

  submitBarcode(): void {
    if (this.barcodeForm.valid) {
      const barcode = this.barcodeForm.get('barcode')?.value;
      this.router.navigate(['/scan-results', this.barcodeCategory, barcode]);
    }
  }
}
