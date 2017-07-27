import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { FrontpageComponent } from './components/frontpage/frontpage.component';

/* Characters */

import { CharactersTableComponent } from './components/characters-table/characters-table.component';

import { CharacterComponent } from './components/character/character.component';

import { CharacterVehiclesComponent } from './components/character-vehicles/character-vehicles.component';
import { CharacterStarshipsComponent } from './components/character-starships/character-starships.component';
import { CharacterFilmsComponent } from './components/character-films/character-films.component';
/* /Characters */

import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SWApiService } from './services/swapi.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpModule } from '@angular/http';



@NgModule({
  imports: [
    CommonModule,
    InformationRoutingModule,
    NgbModule,
    HttpModule
  ],
  declarations: [FrontpageComponent, NavComponent, FooterComponent, CharacterVehiclesTableComponent, CharacterStarshipsTableComponent, CharacterFilmsTableComponent, CharactersTableComponent, CharacterVehiclesComponent, CharacterStarshipsComponent, CharacterFilmsComponent, CharacterComponent],
  providers: [SWApiService]
})
export class InformationModule { }
