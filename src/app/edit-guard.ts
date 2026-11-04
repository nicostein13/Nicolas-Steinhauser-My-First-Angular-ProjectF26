import {CanActivateFn, Router} from '@angular/router';
import { inject } from '@angular/core';
import {Guard} from './guard';

export const editGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const guardService = inject(Guard);

  if(guardService.guardEnabled()){
    return router.parseUrl('/pokemon');
  }

  return true;
};
