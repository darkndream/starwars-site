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

  public characters: Array<IPeople> = [];
  public alert: IAlert = {
    id:1,
    message: 'Cargando...',
    type: 'info'
  };

  constructor(private swapiService: SWApiService,) { 
    super(); 
  }

  ngOnInit() {
    super.ngOnInit();
    this.characters = this.swapiService.GetAllCharacters();
    if (this.characters.length <= 0) {
      this.alert.message = "No se han encontrado resultados <i class='fa fa-cog fa-spin'></i>";
      this.alert.type = "warning";
    }
  }

}
