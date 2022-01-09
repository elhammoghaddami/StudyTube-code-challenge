import { Injectable } from '@angular/core';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(public snackBarService: SnackBarService) { }
  public newError(err) {
     if (typeof (err.errors) == 'object') {
      for (const key in err.errors) {
        this.snackBarService.openSnackBar(err.errors[key], 'toastSuccess');
      }
    }
    else {
      this.snackBarService.openSnackBar(err.message, 'toastSuccess');
    }
  }
}
