import {Component} from '@angular/core';
import routes from './app-routes';
import {Route} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  title = 'git-ss';
  routes: Route[];

  constructor() {
    this.routes = routes;
  }


}
