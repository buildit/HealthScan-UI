import {NgModule} from '@angular/core';
//<<<<<<< tabano/revamp
import {RouterModule, Routes} from "@angular/router";
import {ScanComponent} from "./pages/scan/scan.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {scanTypeGuard} from "./guards/scan-type.guard";
import {memberIdGuard} from "./guards/member-id.guard";
import {ResultComponent} from "./pages/result/result.component";
import {barcodeGuard} from "./guards/barcode.guard";

const routes: Routes = [
  {
    path: 'member/:indvId/:scanType',
    component: ScanComponent,
    canActivate: [scanTypeGuard, memberIdGuard]
  },
  {
    path: 'member/:indvId/:scanType/result/:barcode',
    component: ResultComponent,
    canActivate: [scanTypeGuard, memberIdGuard, barcodeGuard]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
//=======
//import {CommonModule} from '@angular/common';
//import {RouterModule, Routes} from "@angular/router";
//import {RequestSubmittedComponent} from "./page/request-submitted/request-submitted.component";
//import {SubmitRequestComponent} from "./page/submit-request/submit-request.component";
//import {ScanBarcodeComponent} from "./page/scan-barcode/scan-barcode.component";
//import {SelectBarcodeCategoryComponent} from "./page/select-barcode-category/select-barcode-category.component";
//import {ManualBarcodeEntryComponent} from "./page/manual-barcode-entry/manual-barcode-entry.component";
//import {
//  WasteDisposalKitResultsComponent
//} from "./page/results/waste-disposal-kit-results/waste-disposal-kit-results.component";
//import {MedicationResultsComponent} from "./page/results/medication-results/medication-results.component";
//import {LabKitResultsComponent} from "./page/results/lab-kit-results/lab-kit-results.component";


//const routes: Routes = [
//  {path: '', redirectTo: 'select-barcode-category', pathMatch: 'full'},
//  {path: 'select-barcode-category', component: SelectBarcodeCategoryComponent},
//  {path: 'scan/:barcodeCategory', component: ScanBarcodeComponent},
//  {path: 'scan/:barcodeCategory/manual-entry', component: ManualBarcodeEntryComponent},
//  {path: 'scan-results/medication/:barcode', component: MedicationResultsComponent},
//  {path: 'scan-results/lab-kit/:barcode', component: LabKitResultsComponent},
//  {path: 'scan-results/waste-disposal-kit/:barcode', component: WasteDisposalKitResultsComponent},
//  {path: 'submit-request/:barcodeCategory/:barcode', component: SubmitRequestComponent},
//  {path: 'request-submitted', component: RequestSubmittedComponent}
//>>>>>>> main
];

@NgModule({
  declarations: [],
//<<<<<<< tabano/revamp
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
//=======
//  imports: [
//    CommonModule,
//    RouterModule.forRoot(routes)
//  ]
//>>>>>>> main
})
export class AppRoutingModule {
}
