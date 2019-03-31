import {Component} from '@angular/core';
import {Route, Router} from '@angular/router';
import title from './title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  // routes: Route[] = getRoutes().filter(r => r.path && !r.redirectTo);
  routes: Route[];
  title = title;

  constructor (private router: Router) {
    this.routes = this.router.config;
  }

}
