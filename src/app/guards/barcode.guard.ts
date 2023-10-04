import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const barcodeGuard: CanActivateFn = (route, state) => {
  if (route.params['barcode']?.length > 0) {
    return true;
  }
  return inject(Router).navigate(['/404']);
};
