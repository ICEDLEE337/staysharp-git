import {Component, Input, OnInit, Inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ISlide} from '../types';
import {SlideRepositoryService} from '../slide-repository.service';
import title from '../title';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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

  openDialog (slide: ISlide): void {
    const dialogRef = this.dialog.open(Dialog, {
      height: '80%',
      width: '80%',
      data: {slide}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  trackByFn (index, item) {
    return index; // or item.id
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor (private breakpointObserver: BreakpointObserver, private slideRepoSvc: SlideRepositoryService, public dialog: MatDialog) {
    this.slides = this.slideRepoSvc.getAppSlides();
  }

}

@Component({
  selector: 'app-dialog',
  template: `<div class="modal-slide"><app-slide [slide]="data.slide" [hideDetails]="false"></app-slide></div>`,
})
export class Dialog {

  constructor (
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick (): void {
    this.dialogRef.close();
  }

}
