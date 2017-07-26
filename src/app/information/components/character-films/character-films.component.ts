import { Component, OnInit } from '@angular/core';
import { IAlert } from "../../models/IAlert";

@Component({
  selector: 'app-character-films',
  templateUrl: './character-films.component.html',
  styleUrls: ['./character-films.component.scss']
})
export class CharacterFilmsComponent implements OnInit {

  public alert: IAlert = {
    id:1,
    message: 'No se han encontrado registros',
    type: 'info'
  };

  constructor() { }

  ngOnInit() {
  }

}
