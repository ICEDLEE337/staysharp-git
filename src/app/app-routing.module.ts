import {NgModule} from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import * as _ from 'lodash';
import {SlideMapComponent} from './components/slide-map/slide-map.component';
import {PrinciplesComponent} from './entry-components/principles/principles.component';
import {NotFoundComponent} from './entry-components/not-found/not-found.component';
import {ScenariosComponent} from './entry-components/scenarios/scenarios.component';

const enableTracing = true;

const routes: Routes = [
  addPath({
    component: SlideMapComponent,
  }),
  addPath({
    component: PrinciplesComponent,
  }),
  addPath({
    component: ScenariosComponent,
  }),
  {
    redirectTo: toPath(ScenariosComponent),
    pathMatch: 'full',
    path: '',
  },
  {
    path: '**', component: NotFoundComponent
  }
];

if (enableTracing) {
  console.warn('routes', routes);
}

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing})],
  exports: [RouterModule]
})

export class AppRoutingModule {}

function addPath (route: Route): Route {
  const path = toPath(route.component);
  return Object.assign({}, route, {path});
}

function toPath (component: {name: string}) {
  return component.name.replace('Component', '').toLowerCase();
}
