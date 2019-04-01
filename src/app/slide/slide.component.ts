import {Component, OnInit, Input} from '@angular/core';
import {AbstractSlide} from '../slides/abstract-slide';

@Component({
  selector: 'app-slide',
  templateUrl: '../slides/abstract-slide.html',
})
export class SlideComponent extends AbstractSlide implements OnInit {

  @Input('title') title: string;
  getTitle (): string {
    return this.title;
  }

  @Input('subtitle') subTitle: string;
  getSubTitle (): string {
    return this.subTitle;
  }

  @Input('maticonname') matIconName: string;
  getMatIconName (): string {
    return this.matIconName;
  }

  constructor () {
    super();
  }

  ngOnInit () {
  }

}
