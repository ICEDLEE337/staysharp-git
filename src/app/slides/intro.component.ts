import {Component, OnInit} from '@angular/core';
import {AbstractSlide} from './abstract-slide';
import {AbstractSlideWithBulletedList} from './abstract-slide-with-bulleted-list';
import {getRoutes} from '../app-routing.module';
import {Routes} from '@angular/router';
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
  getList (): string[] {
    return _(getRoutes()).filter(r => r.path && !r.redirectTo).map('path').slice(1).value();
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