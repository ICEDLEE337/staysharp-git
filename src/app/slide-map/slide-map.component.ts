import {Component, Input} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ISlide} from '../types';
import {Route} from '@angular/router';

@Component({
  selector: 'app-slide-map',
  templateUrl: './slide-map.component.html',
  styleUrls: ['./slide-map.component.less']
})
export class SlideMapComponent {
  @Input() slides: Route[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Medium)
    .pipe(
      map(result => !result.matches)
    );

  constructor (private breakpointObserver: BreakpointObserver) {}

}
