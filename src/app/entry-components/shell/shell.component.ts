import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html'
})
export class ShellComponent implements OnInit {
  routes: any[];
  activeRoute: IRouteSummary;

  nav (route: {path: string, icon: string}) {
    this.activeRoute = route;
  }

  isActive (route: IRouteSummary): boolean {
    return this.activeRoute && (this.activeRoute.path === route.path);
  }

  constructor () {
  }

  ngOnInit () {
    this.routes = [
      {path: 'principles', icon: 'vpn_key'},
      {path: 'points', icon: 'public'},
      {path: 'aliases', icon: 'code'},
    ];
    this.activeRoute = this.routes[0];
  }

}

interface IRouteSummary {
  path: string;
  icon: string;
}