import {Component, OnInit} from '@angular/core';
import {Route} from '@angular/router';
import {componentRoute} from 'src/app/app-routing-helpers';
import {PrinciplesComponent} from '../principles/principles.component';
import {ScenariosComponent} from '../scenarios/scenarios.component';
import {SlideMapComponent} from 'src/app/components/slide-map/slide-map.component';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html'
})
export class ShellComponent implements OnInit {
  routes: Route[];

  constructor () {
    this.routes = [
      componentRoute(SlideMapComponent),
      componentRoute(PrinciplesComponent),
      componentRoute(ScenariosComponent)
    ];
  }

  ngOnInit () {
  }

}
