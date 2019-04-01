import {Component, OnInit, Input} from '@angular/core';
import {ISlide} from '../types';

@Component({
  selector: 'app-slide',
  templateUrl: './abstract-slide.html',
  styleUrls: ['./abstract-slide.less']
})
export class SlideComponent implements OnInit {

  @Input() slide: ISlide;
  constructor () {

  }

  ngOnInit () {

  }

}
