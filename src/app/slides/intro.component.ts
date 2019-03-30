import {Component, OnInit} from '@angular/core';
import {AbstractSlide} from './abstract-slide';

@Component({
  selector: 'app-intro',
  templateUrl: './abstract-slide.html',
  styles: []
})
export class IntroComponent extends AbstractSlide implements OnInit {
  getTitle (): string {
    return 'Introduction';
  }
  getText (): string {
    return 'this is the intro baby';
  }
  getTitleImg (): string {
    return 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_Mar_2019._CB456991252_SY520_.jpg';
  }
    ngOnInit () {
  }
}