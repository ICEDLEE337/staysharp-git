import { Component, OnInit, Input } from '@angular/core';
import {ISlide} from '../types';
import {TOOLTIP_PANEL_CLASS} from '@angular/material';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.less']
})
export class SlideComponent implements OnInit, ISlide {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
