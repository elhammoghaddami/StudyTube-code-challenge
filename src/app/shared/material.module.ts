import { NgModule } from '@angular/core';
import { BidiModule } from '@angular/cdk/bidi';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
  ],
  exports: [
    BidiModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ClipboardModule,
  ],
  declarations: [],
})
export class MaterialModule {}
