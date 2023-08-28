import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RequestSubmittedComponent} from "./page/request-submitted/request-submitted.component";
import {SubmitRequestComponent} from "./page/submit-request/submit-request.component";
import {ScanBarcodeComponent} from "./page/scan-barcode/scan-barcode.component";
import {SelectBarcodeCategoryComponent} from "./page/select-barcode-category/select-barcode-category.component";
import {ManualBarcodeEntryComponent} from "./page/manual-barcode-entry/manual-barcode-entry.component";
import {
  WasteDisposalKitResultsComponent
} from "./shared/waste-disposal-kit-results/waste-disposal-kit-results.component";
import {MedicationResultsComponent} from "./shared/medication-results/medication-results.component";
import {LabKitResultsComponent} from "./shared/lab-kit-results/lab-kit-results.component";


const routes: Routes = [
  {path: '', redirectTo: 'select-barcode-category', pathMatch: 'full'},
  {path: 'select-barcode-category', component: SelectBarcodeCategoryComponent},
  {path: 'scan/:barcodeCategory', component: ScanBarcodeComponent},
  {path: 'scan/:barcodeCategory/manual-entry', component: ManualBarcodeEntryComponent},
  {path: 'scan-results/medications/:barcode', component: MedicationResultsComponent},
  {path: 'scan-results/lab-kits/:barcode', component: LabKitResultsComponent},
  {path: 'scan-results/waste-disposal-kits/:barcode', component: WasteDisposalKitResultsComponent},
  {path: 'submit-request/:barcodeCategory/:barcode', component: SubmitRequestComponent},
  {path: 'request-submitted', component: RequestSubmittedComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
