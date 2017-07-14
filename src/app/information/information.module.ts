import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SWApiService } from './services/swapi.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    InformationRoutingModule,
    NgbModule
  ],
  declarations: [FrontpageComponent, CharactersComponent, NavComponent, FooterComponent],
  providers: [SWApiService]
})
export class InformationModule { }
