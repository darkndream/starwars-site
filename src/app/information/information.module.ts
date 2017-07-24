import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { FrontpageComponent } from './components/frontpage/frontpage.component';

/* Characters */
import { CharactersComponent } from './components/characters/characters.component';

import { CharacterVehiclesTableComponent } from './components/character-vehicles-table/character-vehicles-table.component';
import { CharacterStarshipsTableComponent } from './components/character-starships-table/character-starships-table.component';
import { CharacterFilmsTableComponent } from './components/character-films-table/character-films-table.component';
/* /Characters */

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
  declarations: [FrontpageComponent, CharactersComponent, NavComponent, FooterComponent, CharacterVehiclesTableComponent, CharacterStarshipsTableComponent, CharacterFilmsTableComponent],
  providers: [SWApiService]
})
export class InformationModule { }
