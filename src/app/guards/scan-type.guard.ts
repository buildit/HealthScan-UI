import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {ScanTypeMap} from "../utils/scan.utl";

export const scanTypeGuard: CanActivateFn = (route, state) => {
  if(Object.keys(ScanTypeMap).includes(route.params['scanType'])) {
    return true;
  }
  return inject(Router).navigate(['/404']);
};
