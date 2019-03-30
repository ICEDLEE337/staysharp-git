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
    return 'https://avatars1.githubusercontent.com/u/7885925?s=88&v=4';
  }
    ngOnInit () {
  }
}