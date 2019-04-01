import { TestBed } from '@angular/core/testing';

import { SelectionAdvisorService } from './selection-advisor.service';

describe('SelectionAdvisorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectionAdvisorService = TestBed.get(SelectionAdvisorService);
    expect(service).toBeTruthy();
  });
});
