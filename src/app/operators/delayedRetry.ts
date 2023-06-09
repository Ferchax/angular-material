import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, retryWhen } from "rxjs/operators";

const getErrorMessage = (maxRetry: number) =>
  `Tried to load Resource over XHR for ${maxRetry} times without success. Give up.`;

const DEFAULT_MAX_RETRIES = 5;
const DEFAULT_BACKOFF = 1000;

export function delayedRetry(delayMs: number, maxRetry = DEFAULT_MAX_RETRIES) {
  let retries = maxRetry;

  return (src: Observable<any>) =>
    src.pipe(
      retryWhen((errors: Observable<any>) => errors.pipe(
        delay(delayMs),
        mergeMap(error => retries-- > 0 ? of(error) : throwError(getErrorMessage(maxRetry)))
      ))
    )
}

export function retryWithBackoff(
  delayMs: number,
  maxRetry = DEFAULT_MAX_RETRIES,
  backoffMs = DEFAULT_BACKOFF)
{

  let retries = maxRetry;

  return (src: Observable<any>) =>
    src.pipe(
      retryWhen((errors: Observable<any>) =>
        errors.pipe(
          mergeMap(error => {
            if(retries-- > 0) {
              const backoffTime = delayMs + (maxRetry - retries) * backoffMs;
              return of(error).pipe(delay(backoffTime));
            }
            return throwError(getErrorMessage(maxRetry));
          })
        )
      )
    )
}
