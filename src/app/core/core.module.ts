import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [RouterModule.forChild([])],
  exports: [NavBarComponent]
})
export class CoreModule { }
