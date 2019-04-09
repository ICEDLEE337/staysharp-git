import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatOptionModule, MatSelectModule,
  MatDialogModule, MatCardModule, MatGridListModule, MatExpansionModule, MatChipsModule, MatStepperModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatChipsModule,
    MatStepperModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule {}
