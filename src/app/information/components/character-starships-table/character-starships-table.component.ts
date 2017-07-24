import { Component, OnInit, Input } from '@angular/core';

import { IPeople } from '../../models/IPeople';
import { IStarship } from '../../models/IStarship';
import { IAlert } from "../../models/IAlert";

import { SWApiService } from '../../services/swapi.service';

@Component({
  selector: 'app-character-starships-table',
  templateUrl: './character-starships-table.component.html',
  styleUrls: ['./character-starships-table.component.scss']
})
export class CharacterStarshipsTableComponent implements OnInit {

  @Input()
  public character: IPeople;

  public starships: Array<IStarship> = [];

  public alert: IAlert = {
    id: 1,
    message: "No se han encontrado resultados",
    type: "info"
  }

  constructor(private swapiService: SWApiService) { }

  ngOnInit() {
    this.starships = this.swapiService.GetCharacterStarships(this.character);
  }

}
