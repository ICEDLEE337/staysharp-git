import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {
  @Input() command: Function;
  @Input() commandCaption: Function;
  @Input() output: Function;
  @Input() outputCaption: Function;
  @Input() params;

  constructor () {}

  ngOnInit () {
  }

  getOutputCaption () {
    return this.format(this.outputCaption);
  }

  getOutput () {
    return this.format(this.output);
  }

  getCommandCaption () {
    return this.format(this.commandCaption);
  }

  getCommand () {
    return this.format(this.command);
  }

  private format (formatter: Function) {
    return formatter ? formatter(this.params) : '';
  }

}
