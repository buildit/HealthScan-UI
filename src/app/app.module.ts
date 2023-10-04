import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {MatListModule} from "@angular/material/list";
import {MatLineModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {ScanComponent} from './pages/scan/scan.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ResultComponent} from './pages/result/result.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    ScanComponent,
    NotFoundComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    ZXingScannerModule,
    MatListModule,
    MatLineModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
