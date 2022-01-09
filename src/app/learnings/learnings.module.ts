import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningsRoutingModule } from './learnings-routing.module';
import { LearningsComponent } from './learnings.component';
import { AddLearningDialogComponent } from './add-learning-dialog/add-learning-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AssignUserToLearningDialogComponent } from './assign-user-to-learning-dialog/assign-user-to-learning-dialog.component';


@NgModule({
  declarations: [
    LearningsComponent,
    AddLearningDialogComponent,
    AssignUserToLearningDialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    LearningsRoutingModule,
    SharedModule
  ]
})
export class LearningsModule { }
