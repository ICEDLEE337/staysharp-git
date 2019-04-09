import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {assign} from 'lodash';
import {CommandComponent} from './command.component';
import {By} from '@angular/platform-browser';
import {MaterialModule} from 'src/app/material/material.module';

fdescribe('CommandComponent', () => {
  let component: CommandComponent;
  let fixture: ComponentFixture<CommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommandComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('GIVEN: params object is defined', () => {

    beforeEach(() => {
      component.params = {
        dir: 'Documents'
      };
      fixture.detectChanges();
    });

    describe('GIVEN: commandFormatter is defined', () => {
      let commandFormatter;

      beforeEach(() => {
        commandFormatter = (paramObj) => `ls ${paramObj.dir}`;
        component.command = commandFormatter;
        fixture.detectChanges();
      });

      it('shows the formatted command', () => {
        assertSelectorContainsText('code.command', 'ls Documents', fixture);
      });

    });

    describe('GIVEN: output is defined', () => {
      let output;

      beforeEach(() => {
        output = ({dir}) => `one two three ${dir}`;
        component.output = output;
        fixture.detectChanges();
      });

      it('shows the formatted output', () => {
        assertSelectorContainsText('code.output', 'one two three Documents', fixture);
      });

    });

    describe('GIVEN: commandCaption is defined', () => {
      let commandCaption;

      beforeEach(() => {
        commandCaption = ({dir}) => `here is how we see what is in ${dir}`;
        component.commandCaption = commandCaption;
        fixture.detectChanges();
      });

      it('shows the formatted command caption', () => {
        assertSelectorContainsText('.command-caption', 'here is how we see what is in Documents', fixture);
      });

    });

    describe('GIVEN: outputCaption is defined', () => {
      let outputCaption;

      beforeEach(() => {
        outputCaption = (params) => `here is the listing for ${params.dir}`;
        assign(component, {outputCaption});
        fixture.detectChanges();
      });

      it('shows the formatted command', () => {
        assertSelectorContainsText('.output-caption', 'here is the listing for Documents', fixture);
      });

    });

  });

  function assertSelectorContainsText (selector, text, fixture) {
    expect(fixture.debugElement.query(By.css(selector)).nativeElement.innerText).toContain(text);
  }

});
