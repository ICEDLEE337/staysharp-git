import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MaterialModule} from './material/material.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SlideComponent} from './components/slide/slide.component'
import { CodeSampleComponent } from './components/code-sample/code-sample.component';
import { PrinciplesComponent } from './entry-components/principles/principles.component';
import { ScenariosComponent } from './entry-components/scenarios/scenarios.component';
import { NotFoundComponent } from './entry-components/not-found/not-found.component';
import { ShellComponent } from './entry-components/shell/shell.component';
import { CommandComponent } from './components/command/command.component';
import { HowToComponent } from './how-to/how-to.component';
import { AliasComponent } from './alias/alias.component';
import { PointsComponent } from './points/points.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    CodeSampleComponent,
    PrinciplesComponent,
    ScenariosComponent,
    NotFoundComponent,
    ShellComponent,
    CommandComponent,
    HowToComponent,
    AliasComponent,
    PointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
  ],
  entryComponents: [
    SlideComponent, PrinciplesComponent, ScenariosComponent, NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
