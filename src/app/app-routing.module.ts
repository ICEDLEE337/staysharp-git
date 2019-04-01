import {NgModule} from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import {IntroComponent} from './slides/intro.component';
import {TheoryComponent} from './slides/theory.component';
import {SlideMapComponent} from './slide-map/slide-map.component';
import * as _ from 'lodash';

const BASE_ROUTE: Route = {
  component: SlideMapComponent,
  path: '',
  pathMatch: 'full',
};

const REDIRECT: Route = {path: '**', redirectTo: 'intro'};

const contentRoutes: IAweSomeRoute[] = [
  {path: 'intro', component: IntroComponent, data: {icon: 'schedule', routes: []}},
  {path: 'theory', component: TheoryComponent, data: {icon: 'code', routes: [
    // {path: 'theory/', }


  ]}}
];

const routes: Routes = [
  ...contentRoutes,
  BASE_ROUTE,
  REDIRECT
];

console.warn(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

interface IAweSomeRoute extends Route {
  data: {icon: string, routes: IAweSomeRoute[]};

}
