import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import {IntroComponent} from './slides/intro.component';
import {TheoryComponent} from './slides/theory.component';

const routes: Routes = [
  {path: 'intro', component: IntroComponent},
  {path: 'theory', component: TheoryComponent},
];

export default routes;
