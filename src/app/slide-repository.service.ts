import { Injectable } from '@angular/core';
import allSlides from './all-slides';

@Injectable({
  providedIn: 'root'
})
export class SlideRepositoryService {
  getAppSlides (): any {
    return allSlides;
  }

  constructor() { }
}
