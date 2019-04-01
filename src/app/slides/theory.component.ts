import {Component, OnInit} from '@angular/core';
import {AbstractSlideWithBulletedList} from './abstract-slide-with-bulleted-list';
import {Router, Route} from '@angular/router';

@Component({
  selector: 'app-theory',
  templateUrl: './abstract-slide.html',
  styles: []
})
export class TheoryComponent extends AbstractSlideWithBulletedList implements OnInit {

  constructor(private router: Router) {
    super();
  }

  getSubTitle (): string {
    return 'Short and simple';
  }

  getList (): Route[] {
    return this.router.config;
  }
  getTitle (): string {
    return 'Theory and concepts';
  }
  getText (): string {
    return 'be prepared';
  }
  getMatIconName (): string {
    return 'code';
  }
    ngOnInit () {
  }
}
