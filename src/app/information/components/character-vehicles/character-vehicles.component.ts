import { Component, OnInit } from '@angular/core';
import { SWApiService } from "../../services/swapi.service";
import { IAlert } from "../../models/IAlert";
@Component({
  selector: 'app-character-vehicles',
  templateUrl: './character-vehicles.component.html',
  styleUrls: ['./character-vehicles.component.scss']
})
export class CharacterVehiclesComponent implements OnInit {

  @input()
  public character

  public alert: IAlert = {
    id:1,
    message: 'No se han encontrado registros',
    type: 'info'
  };

  constructor(private swapiService: SWApiService) { }

  ngOnInit() {

  }

}
