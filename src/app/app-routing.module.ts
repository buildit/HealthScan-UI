import {NgModule} from '@angular/core';
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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
