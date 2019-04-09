import {Component, OnInit, Input} from '@angular/core';
import {ICommand} from 'src/app/types';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {
  @Input() config: ICommand;

  constructor () {
  }

  ngOnInit () {
  }

  getTitle() {
    return this.config.title;
  }

  getOutputCaption () {
    return this.format(this.config.outputCaption);
  }

  getOutput () {
    return this.format(this.config.output);
  }

  getCommandCaption () {
    return this.format(this.config.commandCaption);
  }

  getCommand () {
    return this.format(this.config.command);
  }

  private format (formatter: Function) {
    return formatter ? formatter(this.config.params) : '';
  }

}
