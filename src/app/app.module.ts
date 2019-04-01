import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MaterialModule} from './material/material.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SlideComponent} from './slide/slide.component'
import {SlideMapComponent} from './slide-map/slide-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideMapComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
  ],
  entryComponents: [
    SlideComponent, SlideMapComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
