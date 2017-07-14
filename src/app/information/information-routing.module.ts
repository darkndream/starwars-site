import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { CharactersComponent } from './components/characters/characters.component';

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
        component: CharactersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
