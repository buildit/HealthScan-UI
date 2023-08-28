import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-scan-barcode',
  templateUrl: './scan-barcode.component.html',
  styleUrls: ['./scan-barcode.component.scss']
})
export class ScanBarcodeComponent implements OnInit {
  barcodeCategory: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.barcodeCategory = params.get('barcodeCategory');
    });
  }

  barcodeScanned(barcode: string | null): void {
    this.router.navigate(['/scan-results', this.barcodeCategory, barcode]);
  }

  manualBarcodeSelected(): void {
    this.router.navigate(['/scan', this.barcodeCategory, 'manual-entry']);
  }
}
