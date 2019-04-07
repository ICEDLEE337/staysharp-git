import {NgModule} from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import * as _ from 'lodash';
import {SlideMapComponent} from './components/slide-map/slide-map.component';
import {PrinciplesComponent} from './entry-components/principles/principles.component';
import {NotFoundComponent} from './entry-components/not-found/not-found.component';
import {ScenariosComponent} from './entry-components/scenarios/scenarios.component';
import {ShellComponent} from './entry-components/shell/shell.component';

const enableTracing = true;

const routes: Routes = [

  defaultComponentRoute(ShellComponent,
    [
      componentRoute(SlideMapComponent),
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

////////////////////////////////////////////////////// externalize everything below this line

function redirectToComponent (component) {
  return {
    redirectTo: componentNameAsPath(component),
    path: '',
    pathMatch: 'full'
  };
}

function addComponentNameAsPath (route: Route, pathOverride?: string): Route {
  const path = typeof pathOverride === 'undefined' ? componentNameAsPath(route.component) : pathOverride;
  return Object.assign({}, route, {path});
}

function componentRoute (component, children?: Route[], pathOverride?: string): Route {
  const route = {component, children};
  return addComponentNameAsPath(route, pathOverride);
}

function defaultComponentRoute (component, children?: Route[]): Route {
  return componentRoute(component, children, '');
}

function componentNameAsPath (component: {name: string}): string {
  return component.name.replace('Component', '').toLowerCase();
}
