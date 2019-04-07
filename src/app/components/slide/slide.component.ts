import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ISlide} from '../../types';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() slide: ISlide;
  @Input() hideDetails: boolean;
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
