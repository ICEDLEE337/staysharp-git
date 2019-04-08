import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {
  @Input() commandFormatter: Function;
  @Input() outputFormatter: Function;
  @Input() params;

  constructor () {}

  ngOnInit () {
  }

  getOutputText () {
    return this.format(this.outputFormatter);
  }

  getCommandText () {
    return this.format(this.commandFormatter);
  }

  private format (formatter: Function) {
    return formatter ? formatter(this.params) : '';
  }

}
