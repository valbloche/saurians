import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DinosauresComponent }      from './dinosaures/dinosaures.component';
import { NourritureComponent }      from './nourriture/nourriture.component';

const routes: Routes= [
  { path: '', redirectTo: '/bestiaire', pathMatch: 'full' },
  { path: 'bestiaire', component: DinosauresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }