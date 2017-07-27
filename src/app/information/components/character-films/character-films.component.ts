import { Component, OnInit, Input } from '@angular/core';
import { IPeople } from "../../models/IPeople";
import { SWApiService } from "../../services/swapi.service";

import { Observable } from "rxjs";
import 'rxjs/Rx';
import { IFilm } from "../../models/IFilm";

@Component({
  selector: 'app-character-films',
  templateUrl: './character-films.component.html',
  styleUrls: ['./character-films.component.scss']
})
export class CharacterFilmsComponent implements OnInit {

  @Input()
  public character: IPeople;

  public films: Array<IFilm> = [];

  public isLoading: boolean = true;
  public completion: number = 0;
  public loadedFilms: number = 0;
  public totalFilms: number = 0;

  constructor(private swapiService: SWApiService) { }

  ngOnInit() {
    this.totalFilms = this.character.films.length;
    this.requestForFilms();
  }

  requestForFilms() {
    let that = this;
    this.swapiService
    .GetCharacterFilmsObservable(this.character)
    .forEach(request => {
      request.subscribe(result => {
        that.films.push(result);
        that.updateLoadingProgress();
        if (that.character.films.length == that.films.length) {
          that.didLoadFilms();
        }
      });
    });
  }

  updateLoadingProgress() {
    this.loadedFilms++;
    this.completion = (this.loadedFilms / this.totalFilms) * 100;
  }

  didLoadFilms() {
    this.isLoading = false;
  }

}
