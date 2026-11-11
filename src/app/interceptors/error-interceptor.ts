import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {ErrorService} from '../services/error';
import {catchError, throwError} from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);

  return next(req).pipe(
    catchError((err: HttpErrorResponse)=>{
      if(err.status === 0){
        errorService.set('Network error: the request was blocked or you are offline.');
      }else if(err.status === 404){
        errorService.set('Not found: the request data does not exist.');
      }else if(err.status >= 500){
        errorService.set('Server problem: please try again later.');
      }else{
        errorService.set('Something went wrong. Please try again.');
      }
      return throwError(() => err);
    })
  )
};
