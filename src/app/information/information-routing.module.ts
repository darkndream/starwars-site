import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { CharactersTableComponent } from "./components/characters-table/characters-table.component";
import { CharacterComponent } from "./components/character/character.component";

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
      },
      {
        path: 'character/:id',
        component: CharacterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
