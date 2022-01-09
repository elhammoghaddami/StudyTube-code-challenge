import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { IUser } from '../shared/interfaces';
import { CustomGrid } from '../shared/custom-grid-components/general';
import { MatDialog } from '@angular/material/dialog';
import { UserLearningsDialogComponent } from './user-learnings-dialog/user-learnings-dialog.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { SnackBarService } from '../core/services/snack-bar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends CustomGrid implements OnInit {
  users: IUser[] = [];
  pageSize = 10;
  totalRecords = 0;
  baseUrl = environment.baseUrl
  constructor(private userService: UsersService,
    private snackBarService: SnackBarService,
    private dialog: MatDialog) {
    super()
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(data?) {
    const params = {
      ...this.getParams(),
      q: data
    }
    this.userService.getUsers(params).subscribe((response: any) => {
      this.users = response.data;
      this.totalRecords = response.total;
      this.setAfterResponse(response);
    });
  }
  filterChanged(data: string) {
    this.getUsers(data)
  }
  openLearningDialog(user) {
    const dialogRef = this.dialog.open(UserLearningsDialogComponent, {
      width: '468px',
      data: { learnings: user.learnings },
    });

    dialogRef.afterClosed().subscribe((result) => {

    });
  }
  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '468px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger
        this.userService.createUsers(result).subscribe((response: any) => {
          this.snackBarService.openSnackBar('Add user successfully', 'toastSuccess');
          this.getUsers();
        });
      }
    });
  }
  onRemove(user) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '468px',
      data: {
        tit: 'Remove User',
        msg: 'Are you sure?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.deleteUser(user.id).subscribe((response: any) => {
          this.snackBarService.openSnackBar('Remove user successfully', 'toastSuccess');
          this.getUsers();
        });
      }
    });
  }
}
