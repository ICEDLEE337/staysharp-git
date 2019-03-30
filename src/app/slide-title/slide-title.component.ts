import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-title',
  templateUrl: './slide-title.component.html',
  styleUrls: ['./slide-title.component.less']
})
export class SlideTitleComponent implements OnInit {
  @Input() text;

  constructor() { }

  ngOnInit() {
  }

}
