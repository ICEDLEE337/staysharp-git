import { Component, OnInit } from '@angular/core';
import {IScenario} from './scenarios.types';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.scss']
})
export class ScenariosComponent implements OnInit {
  scenarios: IScenario[];

  constructor() { }

  ngOnInit() {
  }

}
