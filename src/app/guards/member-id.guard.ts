import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const memberIdGuard: CanActivateFn = (route, state) => {
  if(route.params['indvId']?.length > 0) {
    return true;
  }
  return inject(Router).navigate(['/404']);
};
