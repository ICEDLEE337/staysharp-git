import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatOptionModule, MatSelectModule, MatDialogModule} from '@angular/material';
import {MatCardModule, MatGridListModule} from '@angular/material';
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
    MatDialogModule
  ]
})
export class MaterialModule {}
