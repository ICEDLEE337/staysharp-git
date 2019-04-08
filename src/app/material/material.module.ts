import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatOptionModule, MatSelectModule,
  MatDialogModule, MatCardModule, MatGridListModule, MatExpansionModule, MatChipsModule} from '@angular/material';
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
    MatChipsModule
  ]
})
export class MaterialModule {}
