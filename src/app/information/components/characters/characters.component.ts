import { Component, OnInit } from '@angular/core';

import { InformationViewCycle } from '../information-view-cycle';
import { SWApiService } from '../../services/swapi.service';

import { IPeople } from '../../models/IPeople';
import { IAlert } from '../../models/IAlert';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['../frontpage/frontpage.component.scss','./characters.component.scss']
})
export class CharactersComponent extends InformationViewCycle {

  private initialCharacters: Array<IPeople> = [];

  public characters: Array<IPeople> = [];
  public currentCharacter: IPeople = null;
  
  public alert: IAlert = {
    id:1,
    message: 'Cargando...',
    type: 'info'
  };

  constructor(private swapiService: SWApiService) { 
    super(); 
  }

  ngOnInit() {
    super.ngOnInit();
    this.initialCharacters = this.swapiService.GetAllCharacters();
    this.characters = this.initialCharacters.slice(); // Copy array
    if (this.characters.length <= 0) {
      this.alert.message = "Ha ocurrido un error al conseguir los datos deseados";
      this.alert.type = "danger";
    } else {
      this.alert.message = "No se han encontrado resultados";
      this.alert.type = "info";
    }
  }

  onSearchChange(text: string) {
    this.characters = this.initialCharacters.filter(character => 
      character.name.toLowerCase().includes(text.toLowerCase())       ||
      character.height.toLowerCase().includes(text.toLowerCase())     ||
      character.skin_color.toLowerCase().includes(text.toLowerCase()) ||
      character.gender.toLowerCase().includes(text.toLowerCase())
    );
    if (this.characters.length <= 0) {
      this.alert.message = "No se han encontrado resultados";
      this.alert.type = "info";
    } else {
      this.alert.message = "Cargando...";
      this.alert.type = "info";
    }
  }

  setSelectedCharacter(character: IPeople) {
    this.currentCharacter = character;
  }

  onSearchSpecificChange(text: string) {
    if(text.length <= 0) {
      this.currentCharacter = null;
      return;
    }
    let searchResults = this.initialCharacters.filter(character => 
      character.name.toLowerCase().includes(text.toLowerCase())
    );
    if (
      searchResults === undefined || 
      searchResults === null || 
      searchResults.length <= 0
    ) {
      this.currentCharacter = null;
    } else {
      this.currentCharacter = searchResults[0];
    }
  }

}
