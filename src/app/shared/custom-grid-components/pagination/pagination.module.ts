import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { SharedModule } from '../../shared.module';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [PaginationComponent],
  declarations: [PaginationComponent]
})
export class PaginationModule { }
