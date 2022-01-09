import { Component, OnInit } from '@angular/core';
import { ILearning } from '../shared/interfaces';
import { LearningsService } from '../core/services/learnings.service';
import { CustomGrid } from '../shared/custom-grid-components/general';
import { AddLearningDialogComponent } from './add-learning-dialog/add-learning-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { AssignUserToLearningDialogComponent } from './assign-user-to-learning-dialog/assign-user-to-learning-dialog.component';
import { SnackBarService } from '../core/services/snack-bar.service';

@Component({
  selector: 'app-learnings',
  templateUrl: './learnings.component.html',
  styleUrls: ['./learnings.component.scss']
})
export class LearningsComponent extends CustomGrid implements OnInit {
  learnings: ILearning[] = [];
  pageSize = 10;
  totalRecords = 0;
  constructor(private learningService: LearningsService,
    private snackBarService: SnackBarService,
    private dialog: MatDialog) {
    super()
  }

  ngOnInit(): void {
    this.getLearnings()
  }

  getLearnings(data?) {
    const params = {
      ...this.getParams(),
      q: data
    }
    this.learningService.getLearnings(params).subscribe((response: any) => {
      this.learnings = response.data;
      this.totalRecords = response.total;
      this.setAfterResponse(response);
    });
  }
  filterChanged(data: string) {
    this.getLearnings(data)
  }
  openAddLearningDialog(): void {
    const dialogRef = this.dialog.open(AddLearningDialogComponent, {
      width: '468px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.learningService.createLearnings(result).subscribe((response: any) => {
          this.snackBarService.openSnackBar('Add learning successfully', 'toastSuccess');
          this.getLearnings();
        });
      }
    });
  }
  changeStatus(learning) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '468px',
      data: {
        tit: 'Change Status',
        msg: 'Are you sure?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.learningService.changeStatus(learning.id, learning.status == 1 ? { status: 'archive' } : { status: 'unarchive' }).subscribe((response: any) => {
          this.learnings.map((item) => {
            if (item.id === learning.id) {
              item.status == 0 ? item.status = 1 : item.status = 0
            }
          });
        },
          (err) => {
            this.hendleError(err);
          }
        );
      }
    });
  }
  onRemove(learning) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '468px',
      data: {
        tit: 'Remove learning',
        msg: 'Are you sure?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.learningService.deleteLearning(learning.id).subscribe((response: any) => {
          this.getLearnings();
          this.snackBarService.openSnackBar('Remove learning successfully', 'toastSuccess');
        });
      }
    });
  }
  assignUserToLearnings(id) {
    const dialogRef = this.dialog.open(AssignUserToLearningDialogComponent, {
      width: '468px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.learningService.assignUserToLearnings(id, { users: result }).subscribe((response: any) => {
        this.getLearnings()
      });
    });
  }
}
