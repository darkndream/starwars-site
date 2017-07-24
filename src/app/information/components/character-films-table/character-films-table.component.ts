import { Component, OnInit, Input } from '@angular/core';

import { IPeople } from '../../models/IPeople';
import { IFilm } from '../../models/IFilm';

import { SWApiService } from '../../services/swapi.service';
import { IAlert } from "../../models/IAlert";

@Component({
  selector: 'app-character-films-table',
  templateUrl: './character-films-table.component.html',
  styleUrls: ['./character-films-table.component.scss']
})
export class CharacterFilmsTableComponent implements OnInit {

  @Input()
  public character: IPeople;
  
  public films: Array<IFilm> = [];

  public alert: IAlert = {
    id: 1,
    message: "No se han encontrado resultados",
    type: "info"
  }
  constructor(private swapiService: SWApiService) { }

  ngOnInit() {
    this.films = this.swapiService.GetCharacterFilms(this.character);
  }

}
