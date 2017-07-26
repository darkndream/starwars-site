import { Component, OnInit } from '@angular/core';
import { IAlert } from "../../models/IAlert";

@Component({
  selector: 'app-character-starships',
  templateUrl: './character-starships.component.html',
  styleUrls: ['./character-starships.component.scss']
})
export class CharacterStarshipsComponent implements OnInit {

  public alert: IAlert = {
    id:1,
    message: 'No se han encontrado registros',
    type: 'info'
  };

  constructor() { }

  ngOnInit() {
  }

}
