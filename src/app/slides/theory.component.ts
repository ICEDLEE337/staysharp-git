import {Component, OnInit} from '@angular/core';
import {AbstractSlide} from './abstract-slide';

@Component({
  selector: 'app-theory',
  templateUrl: './abstract-slide.html',
  styles: []
})
export class TheoryComponent extends AbstractSlide implements OnInit {
  getTitle (): string {
    return 'Theory and concepts';
  }
  getText (): string {
    return 'be prepared';
  }
  getTitleImg (): string {
    return 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_Mar_2019._CB456991252_SY520_.jpg';
  }
    ngOnInit () {
  }
}