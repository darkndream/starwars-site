import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: 'landing',
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
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
