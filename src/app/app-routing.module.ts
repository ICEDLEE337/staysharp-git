import {NgModule} from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import * as _ from 'lodash';
import slides from './all-slides';
import {SlideMapComponent} from './slide-map/slide-map.component';

const BASE_ROUTE: Route = {
  component: SlideMapComponent,
  path: '',
  pathMatch: 'full',
};

const REDIRECT: Route = {
  path: '**', redirectTo: '', data: {
    slides
  }
};

const routes: Routes = [
  BASE_ROUTE,
  REDIRECT
];

console.warn('routes', routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
