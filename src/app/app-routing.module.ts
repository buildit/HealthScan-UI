import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BarcodeScannerComponent} from "./component/barcode-scan/barcode-scanner.component";


const routes: Routes = [
  { path: '', redirectTo: '/scan', pathMatch: 'full' },
  { path: 'scan', component: BarcodeScannerComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
