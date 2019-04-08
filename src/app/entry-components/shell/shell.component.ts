import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html'
})
export class ShellComponent implements OnInit {
  routes: any[];

  constructor () {
  }

  ngOnInit () {
    this.routes = [
      {path: 'principles', icon: 'vpn_key'},
      {path: 'principles', icon: 'public'},
    ];
  }

}
