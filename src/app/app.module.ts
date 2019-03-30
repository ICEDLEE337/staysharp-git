import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideMapComponent } from './slide-map/slide-map.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { IntroComponent } from './slides/intro.component';
import { TheoryComponent } from './slides/theory.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideMapComponent,
    IntroComponent,
    TheoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  entryComponents: [
    IntroComponent, TheoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
