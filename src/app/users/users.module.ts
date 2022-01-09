import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared.module';
import { UserLearningsDialogComponent } from './user-learnings-dialog/user-learnings-dialog.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    ReactiveFormsModule,
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    UsersComponent,
    UserLearningsDialogComponent,
    AddUserComponent
  ]
})
export class UsersModule { }
