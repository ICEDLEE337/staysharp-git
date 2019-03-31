import {Component, OnInit} from '@angular/core';
import {AbstractSlideWithBulletedList} from './abstract-slide-with-bulleted-list';

@Component({
  selector: 'app-theory',
  templateUrl: './abstract-slide.html',
  styles: []
})
export class TheoryComponent extends AbstractSlideWithBulletedList implements OnInit {
  getSubTitle (): string {
    return 'Short and simple';
  }
  getList (): string[] {
    return [
      'Pointers',
      'Hashing',
      'Tiger Woods',
      'Obama',
      'etc'
    ];
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