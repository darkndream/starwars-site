import { Component, OnInit, Input } from '@angular/core';

import { IAlert } from '../../models/IAlert';
import { IVehicle } from '../../models/IVehicle';
import { IPeople } from "../../models/IPeople";

import { SWApiService } from '../../services/swapi.service';


@Component({
  selector: 'app-character-vehicles-table',
  templateUrl: './character-vehicles-table.component.html',
  styleUrls: ['./character-vehicles-table.component.scss']
})
export class CharacterVehiclesTableComponent implements OnInit {

  @Input()
  public character: IPeople;

  public vehicles: Array<IVehicle> = [];

  public alert: IAlert = {
    id: 1,
    message: "No se han encontrado resultados",
    type: "info"
  }

  constructor(private swapiService: SWApiService) { }

  ngOnInit() {
    this.vehicles = this.swapiService.GetCharacterVehicles(this.character);
  }

}
