import { Component, OnInit, Input } from '@angular/core';
import {ICodeSample} from '../../types';

@Component({
  selector: 'app-code-sample',
  templateUrl: './code-sample.component.html',
  styleUrls: ['./code-sample.component.scss']
})
export class CodeSampleComponent implements OnInit {
  @Input() code: ICodeSample;

  constructor() {

   }

  ngOnInit() {
    console.warn(this.code);
  }

}
