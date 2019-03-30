import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SlideTitleComponent} from './slide-title.component';
import {By} from '@angular/platform-browser';
import {setDOM} from '@angular/platform-browser/src/dom/dom_adapter';

describe('SlideTitleComponent', () => {
  let component: SlideTitleComponent;
  let fixture: ComponentFixture<SlideTitleComponent>;
  const someRandomText = 'asdfasdkjhfsdfl';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlideTitleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Given property text is defined', () => {
    beforeEach(() => givenPropertyTextIsDefinedAs(someRandomText));

    it('should show the provided text', () => {
      fixture.detectChanges();
      expectItToHaveAn('h1').with(someRandomText);
    });

  });

  function givenPropertyTextIsDefinedAs (sampleText) {
    component.text = sampleText;
  }

  function expectItToHaveAn (selector) {
    return {
      with: function (expectedText) {
        expect(fixture.debugElement.query(By.css(selector)).nativeElement.innerText).toEqual(expectedText);
      }
    };

  }
});
