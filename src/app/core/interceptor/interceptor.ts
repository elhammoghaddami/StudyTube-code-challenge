import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SnackBarService } from '../services/snack-bar.service';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  constructor(private snackBService: SnackBarService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(
        () => { },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            for (const key in err.error.errors) {
              this.snackBService.openSnackBar(
                err.error.errors[key],
                'toastUnSuccess'
              );
            }

          }
        }
      )
    );
  }
}
