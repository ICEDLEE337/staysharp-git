import { Component, OnInit } from '@angular/core';
import {ICommand} from '../types';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {
  commands: ICommand[];

  constructor() { }

  ngOnInit() {
  }

}
