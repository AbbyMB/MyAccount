import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavesComponent } from './saves.component'

const routes: Routes = [
  { path: 'myaccount/saves', component: SavesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavesRoutingModule { }
