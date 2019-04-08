import {Component, OnInit} from '@angular/core';
import {Route} from '@angular/router';
import {componentRouteWithIcon} from 'src/app/app-routing-helpers';
import {PrinciplesComponent} from '../principles/principles.component';
import {ScenariosComponent} from '../scenarios/scenarios.component';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html'
})
export class ShellComponent implements OnInit {
  routes: Route[];

  constructor () {
    this.routes = [
      componentRouteWithIcon(PrinciplesComponent, 'vpn_key'),
      componentRouteWithIcon(ScenariosComponent, 'public')
    ];
  }

  ngOnInit () {
  }

}
