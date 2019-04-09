import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CommandComponent} from './command.component';
import {MaterialModule} from 'src/app/material/material.module';
import {assertSelectorContainsText} from 'src/test-assertion-helpers';

describe('CommandComponent', () => {
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

  describe('GIVEN: config:ICommand object is defined on component', () => {

    beforeEach(() => {
      component.config = {
        command: (paramObj) => `ls ${paramObj.dir}`,
        output: ({dir}) => `one two three ${dir}`,
        commandCaption: ({dir}) => `here is how we see what is in ${dir}`,
        outputCaption: (params) => `here is the listing for ${params.dir}`,
        title: 'ls command',
        params: {
          dir: 'Documents'
        }
      };

      fixture.detectChanges();
    });

    it('shows the formatted command', () => {
      assertSelectorContainsText('code.command', 'ls Documents', fixture, expect);
    });

    it('shows the formatted output', () => {
      assertSelectorContainsText('code.output', 'one two three Documents', fixture, expect);
    });

    it('shows the formatted command caption', () => {
      assertSelectorContainsText('.command-caption', 'here is how we see what is in Documents', fixture, expect);
    });

    it('shows the formatted command', () => {
      assertSelectorContainsText('.output-caption', 'here is the listing for Documents', fixture, expect);
    });

  });
});
