import {Component, OnInit} from '@angular/core';
import {IPrinciple} from './principles.types';

@Component({
  selector: 'app-principles',
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.scss']
})
export class PrinciplesComponent implements OnInit {
  principles: IPrinciple[];

  constructor () {}

  ngOnInit () {
    this.principles = [
      {
        principle: 'Immutability (Scoped to shared, conventional branches like develop and master)',
        points: [
          'No forced pushes',
          'No altering shared history',
          'This has the potential to delete code',
          'This is why conventional branches are protected (develop and master)',
          'This is why you have to use -f because git knows it\'s destructive and prevents it by default',
        ],
        do: [
          'protect your trunks (develop and master by convention)',
          'always create a backup (git branch myBackupName) if you insist on doing this'
        ],
        dont: [
          'ever turn off branch protection and force push over top off one of your conventional trunks (develop and master)'
        ]
      },
      {
        principle: 'One commit is easiest',
        points: [
          'Working with one command means that we don\'t have to deal with any additional history reconciliation',
          'Easier to audit, migrate or revert'
        ],
        do: [
          'Squash your commits or maintain one working commit'
        ],
        dont: [
          'merge your 50 commits into your main trunk unless you want to make those individual commits to be visible for a specific reason'
        ]
      },
      {principle: ''}
    ];
  }

}
