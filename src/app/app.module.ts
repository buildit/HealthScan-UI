import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BarcodeScannerComponent} from './shared/barcode-scanner/barcode-scanner.component';
import {BarcodeScannerService} from "./shared/barcode-scanner/service/barcode-scanner.service";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {SelectBarcodeCategoryComponent} from './page/select-barcode-category/select-barcode-category.component';
import {ScanBarcodeComponent} from './page/scan-barcode/scan-barcode.component';
import {SubmitRequestComponent} from './page/submit-request/submit-request.component';
import {RequestSubmittedComponent} from './page/request-submitted/request-submitted.component';
import {MatSelectModule} from "@angular/material/select";
import {ManualBarcodeEntryComponent} from './page/manual-barcode-entry/manual-barcode-entry.component';
import {MatListModule} from "@angular/material/list";
import {MedicationResultsComponent} from './shared/medication-results/medication-results.component';
import {
  WasteDisposalKitResultsComponent
} from './shared/waste-disposal-kit-results/waste-disposal-kit-results.component';
import {LabKitResultsComponent} from './shared/lab-kit-results/lab-kit-results.component';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeScannerComponent,
    SelectBarcodeCategoryComponent,
    ScanBarcodeComponent,
    SubmitRequestComponent,
    RequestSubmittedComponent,
    ManualBarcodeEntryComponent,
    MedicationResultsComponent,
    WasteDisposalKitResultsComponent,
    LabKitResultsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    AppRoutingModule,
    RouterOutlet,
    MatIconModule,
    MatInputModule,
    RouterLink
  ],
  providers: [BarcodeScannerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
