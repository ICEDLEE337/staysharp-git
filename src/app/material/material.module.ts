import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {MatCardModule, MatGridListModule} from '@angular/material';
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
    MatGridListModule
  ]
})
export class MaterialModule {}
