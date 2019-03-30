import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import contentRoutes from './app-routes';
import {AppComponent} from './app.component';

const routes = contentRoutes.slice();

routes.push({
  component: AppComponent,
  path: '',
  pathMatch: 'full'
});

routes.push({path: '**', redirectTo: 'intro'});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
