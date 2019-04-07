import {Component, OnInit} from '@angular/core';
import {ISlide} from 'src/app/types';
import {SlideRepositoryService} from 'src/app/slide-repository.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html'
})
export class ShellComponent implements OnInit {
  slides: ISlide[];

  constructor (private slideRepoSvc: SlideRepositoryService) {}

  ngOnInit () {
    this.slides = this.slideRepoSvc.getAppSlides();
  }

}
