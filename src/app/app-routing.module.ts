import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrinciplesComponent} from './entry-components/principles/principles.component';
import {NotFoundComponent} from './entry-components/not-found/not-found.component';
import {ScenariosComponent} from './entry-components/scenarios/scenarios.component';
import {ShellComponent} from './entry-components/shell/shell.component';

// import {componentRoute, defaultComponentRoute, redirectToComponent} from './app-routing-helpers';

const enableTracing = false;

// const routes: Routes = [

//   defaultComponentRoute(ShellComponent,
//     [
//       componentRoute(PrinciplesComponent),
//       componentRoute(ScenariosComponent),
//       redirectToComponent(ScenariosComponent),
//     ]
//   ),

//   redirectToComponent(ShellComponent),

//   {
//     path: '**', component: NotFoundComponent
//   }

// ];

const routes: Routes = [
  {
    "children": [
      {
        "path": "principles",
        component: PrinciplesComponent
      },
      {
        "path": "scenarios",
        component: ScenariosComponent
      },
      {
        "redirectTo": "scenarios",
        "path": "",
        "pathMatch": "full"
      }
    ],
    "path": "",
    component: ShellComponent
  },
  {
    "redirectTo": "shell",
    "path": "",
    "pathMatch": "full"
  },
  {
    "path": "**", component: NotFoundComponent
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
