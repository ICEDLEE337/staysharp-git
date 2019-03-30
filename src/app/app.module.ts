import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideTitleComponent } from './slide-title/slide-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideMapComponent } from './slide-map/slide-map.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { IntroComponent } from './slides/intro.component';
import { TheoryComponent } from './slides/theory.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideTitleComponent,
    SlideMapComponent,
    IntroComponent,
    SlideComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
