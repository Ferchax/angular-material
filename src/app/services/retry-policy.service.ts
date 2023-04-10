import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, retry, shareReplay } from 'rxjs/operators';
import { retryWithBackoff } from '../operators/delayedRetry';

interface Data {
  title: string;
  body: string;
}



@Injectable({
  providedIn: 'root'
})
export class RetryPolicyService {

  private TEST_ENDPOINT = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  // 1st version
  /*getData(): Observable<Data> {
    return this.httpClient
    .get<Data>(`${this.TEST_ENDPOINT}/posts/1`)
    .pipe(
      retry(3),
      catchError(() => {
        // Perform some error handling
        return EMPTY;
      }),
      shareReplay()
    );
  }*/

  // 2nd version
  getData(): Observable<Data> {
    return this.httpClient
    .get<Data>(`${this.TEST_ENDPOINT}/posts/1`)
    .pipe(
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
