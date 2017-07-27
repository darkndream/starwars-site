import { Component, OnInit, Input } from '@angular/core';
import { IPeople } from "../../models/IPeople";
import { SWApiService } from "../../services/swapi.service";

import { Observable } from "rxjs";
import 'rxjs/Rx';
import { IStarship } from "../../models/IStarship";


@Component({
  selector: 'app-character-starships',
  templateUrl: './character-starships.component.html',
  styleUrls: ['./character-starships.component.scss']
})
export class CharacterStarshipsComponent implements OnInit {

  @Input()
  public character: IPeople;

  public starships: Array<IStarship> = [];

  public isLoading: boolean = true;
  public completion: number = 0;
  public loadedStarships: number = 0;
  public totalStarships: number = 0;

  constructor(private swapiService: SWApiService) { }

  ngOnInit() {
    this.totalStarships = this.character.starships.length;
    this.requestForStarships();
  }

  requestForStarships() {
    console.log(this.character.starships);
    let that = this;
    this.swapiService
    .GetCharacterStarshipsObservable(this.character)
    .forEach(request => {
      request.subscribe(result => {
        that.starships.push(result);
        that.updateLoadingProgress();
        if (that.character.starships.length == that.starships.length) {
          that.didLoadStarships();
        }
      });
    });
  }

  updateLoadingProgress() {
    this.loadedStarships++;
    this.completion = (this.loadedStarships / this.totalStarships) * 100;
  }

  didLoadStarships() {
    this.isLoading = false;
  }

}
