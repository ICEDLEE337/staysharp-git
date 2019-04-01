import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ISlide} from '../types';

@Component({
  selector: 'app-slide',
  templateUrl: './abstract-slide.html',
  styleUrls: ['./abstract-slide.less']
})
export class SlideComponent implements OnInit {

  @Input() slide: ISlide;
  @Output() slideSwitch: EventEmitter<any> = new EventEmitter<any>();
  constructor () {

  }

  switchWrapper (slide: ISlide, $index: number) {
    console.warn(slide, $index);
    this.slideSwitch.emit(slide);
  }

  ngOnInit () {

  }

}
