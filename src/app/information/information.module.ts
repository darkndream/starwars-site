import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    InformationRoutingModule
  ],
  declarations: [FrontpageComponent, CharactersComponent, NavComponent, FooterComponent]
})
export class InformationModule { }
