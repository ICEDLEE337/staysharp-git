import {NgModule} from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import {IntroComponent} from './slides/intro.component';
import {TheoryComponent} from './slides/theory.component';
import {SlideMapComponent} from './slide-map/slide-map.component';
import * as _ from 'lodash';

const routes: Routes = [
  {path: 'intro', component: IntroComponent, data: {icon: 'schedule'}},
  {path: 'theory', component: TheoryComponent, data: {icon: 'code'}},
];

export function getRoutes (): Routes {
  return routes.slice();
}

const BASE_ROUTE: Route = {
  component: SlideMapComponent,
  path: '',
  pathMatch: 'full',
};

const REDIRECT: Route = {path: '**', redirectTo: 'intro'};

routes.push(BASE_ROUTE);
routes.push(REDIRECT);

console.warn(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
