import {TestBed} from '@angular/core/testing';

import {SlideRepositoryService} from './slide-repository.service';
import appSlides from './all-slides';

describe('SlideRepositoryService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    let service: SlideRepositoryService = TestBed.get(SlideRepositoryService);
    expect(service).toBeTruthy();
  });

  fdescribe('METHOD: getAppSlides()', () => {
    it('returns the master list of slides', () => {
      let service: SlideRepositoryService = TestBed.get(SlideRepositoryService);
      expect(service.getAppSlides()).toEqual(appSlides);
    });
  });
});
