import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { retryWithBackoff } from '../operators/delayedRetry';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      retryWithBackoff(1000, 3),
      catchError(error => {
        console.log(error);
        // Perform some error handling
        return EMPTY;
      }),
      shareReplay()
    );

  }
}
