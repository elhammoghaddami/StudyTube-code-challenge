import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ILearning } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-user-learnings-dialog',
  templateUrl: './user-learnings-dialog.component.html',
  styleUrls: ['./user-learnings-dialog.component.scss']
})
export class UserLearningsDialogComponent implements OnInit {
  learnings: ILearning[] = [];
  constructor(public dialogRef: MatDialogRef<UserLearningsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,) { }

  ngOnInit(): void {
    this.learnings = this.data.learnings;
  }

}
