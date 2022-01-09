import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterTextboxComponent } from './filter-textbox.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [CommonModule,MaterialModule,FormsModule],
  exports: [FilterTextboxComponent],
  declarations: [FilterTextboxComponent]
})
export class FilterTextboxModule { }
