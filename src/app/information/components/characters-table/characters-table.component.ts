import { Component, OnInit } from '@angular/core';
import { SWApiService } from "../../services/swapi.service";

import { Observable } from "rxjs";
import 'rxjs/Rx';

import { IPeopleList } from "../../models/IPeopleList";
import { IPeople } from "app/information/models/IPeople";
import { InformationViewCycle } from "../information-view-cycle";
import { IAlert } from "../../models/IAlert";

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['../frontpage/frontpage.component.scss', './characters-table.component.scss']
})
export class CharactersTableComponent extends InformationViewCycle {

  public characters: Array<IPeople> = [];
  
  private fullCharacters: Array<IPeople> = [];

  /* Loading screen */
  private currentLoadingPage: number = 1;
  public isLoading: boolean = true;
  public completion: number = 0;
  public loadedCharacters: number = 0;
  public totalCharacters: number = 0;
  /* Loading screen */

  public alert: IAlert = {
    id:1,
    message: 'No se han encontrado registros',
    type: 'info'
  };

  constructor(private swapiService: SWApiService) { super(); }

  ngOnInit() {
    super.ngOnInit();
    this.requestForCharacters();
  }

  requestForCharacters() {
    try {
      let that = this;
      this.swapiService.GetCharactersPageObservable(this.currentLoadingPage)
      .subscribe(result => {
        Array.prototype.push.apply(that.characters, result.results);
        if (result.next != null) {
          that.updateLoadingProgression(result);
          that.requestForCharacters();
        } else {
          that.didLoadCharacters();
        }
      });
    } catch (error) {
      this.alert.message = "Ha ocurrido un error al obtener los datos deseados";
      this.alert.type = "danger";
    }
  }

  public onSearchChange(text: string) {
    
    if (this.isLoading) return;

    if (text.length == 0) {
      this.characters = this.fullCharacters.slice();
    } else {
      this.characters = this.fullCharacters.filter(character => 
        character.name.toLowerCase().includes(text.toLowerCase())       ||
        character.height.toLowerCase().includes(text.toLowerCase())     ||
        character.skin_color.toLowerCase().includes(text.toLowerCase()) ||
        character.gender.toLowerCase().includes(text.toLowerCase())
      );
    }
    
  }

  updateLoadingProgression(result: IPeopleList) {
    this.totalCharacters = result.count;
    this.loadedCharacters = this.characters.length;
    this.completion = (this.loadedCharacters / this.totalCharacters) * 100;
    this.currentLoadingPage++;
  }

  didLoadCharacters() {
    this.isLoading = false;
    this.fullCharacters = this.characters.slice();
  }

  getCharacterId(character: IPeople): number {
    return parseInt(/\d+/g.exec(character.url)[0]);
  }

}
