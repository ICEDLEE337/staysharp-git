import {Component} from '@angular/core';
import {Route} from '@angular/router';
import {getRoutes} from './app-routing.module';
import title from './title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  routes: Route[] = getRoutes().filter(r => r.path && !r.redirectTo);
  title = title;

  constructor () {
  }


}
