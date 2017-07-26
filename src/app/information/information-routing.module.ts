import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharactersTableComponent } from "./components/characters-table/characters-table.component";

const routes: Routes = [
  {
    path: 'information',
    children: [
      {
        path: '',
        component: FrontpageComponent
      },
      {
        path: 'frontpage',
        component: FrontpageComponent
      },
      {
        path: 'characters',
        component: CharactersTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
