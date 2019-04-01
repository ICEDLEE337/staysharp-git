import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ISlide} from '../types';
import {SlideRepositoryService} from '../slide-repository.service';
import title from '../title';

@Component({
  selector: 'app-slide-map',
  templateUrl: './slide-map.component.html',
  styleUrls: ['./slide-map.component.less']
})
export class SlideMapComponent implements OnInit {
  slides: ISlide[];
  title: string = title;
  activeSlide: ISlide;
  query: string;

  ngOnInit (): void {
    this.activeSlide = this.slides[0];
  }

  onSelect (slide: ISlide) {
    console.warn('onSelect');
    this.activeSlide = slide;
  }

  isVisible (slide: ISlide): boolean {
    if (this.query) {
      if (slide && slide.title) {
        return slide.title.toUpperCase().includes(this.query.toUpperCase());
      }
      return true;
    }
    return true;
  }

  trackByFn (index, item) {
    return index; // or item.id
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor (private breakpointObserver: BreakpointObserver, private slideRepoSvc: SlideRepositoryService) {
    this.slides = this.slideRepoSvc.getAppSlides();
  }

}
