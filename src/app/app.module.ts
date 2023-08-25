import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { BarcodeScannerComponent } from './component/barcode-scan/barcode-scanner.component';
import {BarcodeScannerService} from "./service/barcode-scanner/barcode-scanner.service";
import {MatIconModule} from "@angular/material/icon";
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import {MatInputModule} from "@angular/material/input";

@NgModule({
    declarations: [
        AppComponent,
        BarcodeScannerComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    AppRoutingModule,
    RouterOutlet,
    MatInputModule
  ],
    providers: [BarcodeScannerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
