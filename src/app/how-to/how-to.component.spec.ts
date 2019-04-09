import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HowToComponent} from './how-to.component';
import {assertSelectorContainsText} from 'src/test-assertion-helpers';
import {ICommand} from '../types';
import {CommandComponent} from '../components/command/command.component';
import {MaterialModule} from '../material/material.module';

describe('HowToComponent', () => {
  let component: HowToComponent;
  let fixture: ComponentFixture<HowToComponent>;
  let gitDiff: ICommand = {
    title: 'Git diff',
    command: ({branch1, branch2}) => `git diff ${branch1} ${branch2}`,
    commandCaption: ({branch1, branch2}) => `This is how you determine the diff between ${branch1} and ${branch2}`,
    output: ({branch1, branch2}) => `git diff ${branch1} ${branch2}`,
    outputCaption: ({branch1, branch2}) => `Look how many files are missing from ${branch1} but are in ${branch2}`,
    params: {branch1: 'develop', branch2: 'myFeatureBranch'}
  };
  let gitReset: ICommand = {
    title: 'Git reset',
    command: ({ref1, hard}) => `git reset${hard ? ' --hard ' : ' '}${ref1}`,
    commandCaption: () => `This is how you remove your changes`,
    output: ({branch1, branch2}) => `git diff ${branch1} ${branch2}`,
    outputCaption: () => `Here is the output`,
    params: {ref1: 'develop', hard: true}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HowToComponent, CommandComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('GIVEN: an array of commands is defined on the component', () => {
    let commands: ICommand[];

    beforeEach(() => {
      commands = [
        gitDiff, gitReset
      ];
      component.commands = commands;
      fixture.detectChanges();
    });

    fit('renders the first command', () => {
      assertSelectorContainsText('mat-horizontal-stepper', 'git diff develop myFeatureBranch', fixture, expect);
    });

  });
});
