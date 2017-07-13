import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
  imports: [
    CommonModule,
    InformationRoutingModule
  ],
  declarations: [FrontpageComponent, CharactersComponent]
})
export class InformationModule { }
