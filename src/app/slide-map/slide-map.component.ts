import {Component, Input} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ISlide} from '../types';
import {Route} from '@angular/router';

@Component({
  selector: 'app-slide-map',
  templateUrl: './slide-map.component.html',
  styleUrls: ['./slide-map.component.less']
})
export class SlideMapComponent {
  @Input() slides: Route[];
  @Input() title: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor (private breakpointObserver: BreakpointObserver) {}

}
