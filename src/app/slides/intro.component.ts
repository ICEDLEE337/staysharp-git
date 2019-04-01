import {Component, OnInit} from '@angular/core';
import {AbstractSlide} from './abstract-slide';
import {AbstractSlideWithBulletedList} from './abstract-slide-with-bulleted-list';

import {Routes, Router, Route} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-intro',
  templateUrl: './abstract-slide.html',
  styles: []
})
export class IntroComponent extends AbstractSlideWithBulletedList implements OnInit {
  getSubTitle (): string {
    return '';
  }

  constructor (private router: Router) {
    super();
  }

  getList (): Route[] {
    return this.router.config.filter(r => r.path && !r.redirectTo).slice(1);
  }
  getTitle (): string {
    return 'Introduction';
  }
  getMatIconName (): string {
    return 'schedule';
  }
  ngOnInit () {
  }
}