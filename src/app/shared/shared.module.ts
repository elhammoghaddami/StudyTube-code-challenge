import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTextboxModule } from './custom-grid-components/filter-textbox/filter-textbox.module';
import { MaterialModule } from './material.module';
import { PaginationModule } from './custom-grid-components/pagination/pagination.module';
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FilterTextboxModule,
    PaginationModule,
    ConfirmDialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FilterTextboxModule,
    PaginationModule,
    ConfirmDialogModule
  ],
  declarations: [
  ],
})
export class SharedModule { }
