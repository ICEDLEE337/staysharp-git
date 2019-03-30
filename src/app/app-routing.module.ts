import {NgModule} from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import {IntroComponent} from './slides/intro.component';
import {TheoryComponent} from './slides/theory.component';
import {SlideMapComponent} from './slide-map/slide-map.component';
import * as _ from 'lodash';

const routes: Routes = [
  {path: 'intro', component: IntroComponent},
  {path: 'theory', component: TheoryComponent},
];

export function getRoutes () {
  return routes.slice();
}

const BASE_ROUTE: Route = {
  component: SlideMapComponent,
  path: '',
  pathMatch: 'full',
  data: {
    routes: _.map(routes, 'path')
  }
};

const REDIRECT: Route = {path: '**', redirectTo: 'intro'};

routes.push(BASE_ROUTE);
routes.push(REDIRECT);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
