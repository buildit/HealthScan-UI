import {Component} from '@angular/core';
import {BarcodeCategory, BarcodeCategoryMapping, getAllCategories} from "../../model/Barcode.model";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select-barcode-category',
  templateUrl: './select-barcode-category.component.html',
  styleUrls: ['./select-barcode-category.component.scss']
})
export class SelectBarcodeCategoryComponent {
  barcodeCategory = new FormControl<BarcodeCategory | null>(null);
  categories: BarcodeCategory[] = getAllCategories();

  constructor(private router: Router) {
  }

  goToScanPage() {
    if (this.barcodeCategory.value !== null) {
      const selectedCategory = BarcodeCategoryMapping[this.barcodeCategory.value];
      this.router.navigate(['/scan', selectedCategory]);
    }
  }
}
