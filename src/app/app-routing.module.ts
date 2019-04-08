import {NgModule} from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import * as _ from 'lodash';
import {PrinciplesComponent} from './entry-components/principles/principles.component';
import {NotFoundComponent} from './entry-components/not-found/not-found.component';
import {ScenariosComponent} from './entry-components/scenarios/scenarios.component';
import {ShellComponent} from './entry-components/shell/shell.component';

import {componentRoute, defaultComponentRoute, redirectToComponent} from './app-routing-helpers';

const enableTracing = true;

const routes: Routes = [

  defaultComponentRoute(ShellComponent,
    [
      componentRoute(PrinciplesComponent),
      componentRoute(ScenariosComponent),
      redirectToComponent(ScenariosComponent),
    ]
  ),

  redirectToComponent(ShellComponent),

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
