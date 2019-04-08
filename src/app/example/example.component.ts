import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
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
