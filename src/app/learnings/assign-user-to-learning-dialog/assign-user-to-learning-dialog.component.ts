import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IUser } from 'src/app/shared/interfaces';
import { UsersService } from 'src/app/core/services/users.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-assign-user-to-learning-dialog',
  templateUrl: './assign-user-to-learning-dialog.component.html',
  styleUrls: ['./assign-user-to-learning-dialog.component.scss']
})
export class AssignUserToLearningDialogComponent implements OnInit {
  userSelected = new FormControl();
  users: IUser[] = [];
  constructor(private userService: UsersService,
    public dialogRef: MatDialogRef<AssignUserToLearningDialogComponent>,) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    const params = {
      pageSize: null,
      page: null
    }
    this.userService.getUsers(params).subscribe((response: any) => {
      this.users = response;
    });
  }
  submit(value) {
    this.dialogRef.close(value)
  }
  close() {
    this.dialogRef.close()
  }
}
