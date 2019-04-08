import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {assign} from 'lodash';
import {CommandComponent} from './command.component';
import {By} from '@angular/platform-browser';

describe('CommandComponent', () => {
  let component: CommandComponent;
  let fixture: ComponentFixture<CommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommandComponent]
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
    let params;

    beforeEach(() => {
      params = {
        dir: 'Documents'
      };
      assign(component, {params});
      fixture.detectChanges();
    });

    describe('GIVEN: commandFormatter is defined', () => {
      let commandFormatter;

      beforeEach(() => {
        commandFormatter = (paramObj) => `ls ${paramObj.dir}`;
        assign(component, {commandFormatter});
        fixture.detectChanges();
      });

      it('shows the formatted command', () => {
        expect(fixture.debugElement.query(By.css('code.command')).nativeElement.innerText).toContain('ls Documents');
      });

    });

    describe('GIVEN: outputFormatter is defined', () => {
      let outputFormatter;

      beforeEach(() => {
        outputFormatter = () => `one two three`;
        assign(component, {outputFormatter});
        fixture.detectChanges();
      });

      it('shows the formatted output', () => {
        expect(fixture.debugElement.query(By.css('code.output')).nativeElement.innerText).toContain('one two three');
      });

    });

  });
});
