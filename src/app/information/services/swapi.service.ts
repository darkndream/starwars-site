import { Injectable } from '@angular/core';

import { IPeople } from '../models/IPeople';
import { IPeopleList } from '../models/IPeopleList';
import { IStarship } from '../models/IStarship';
import { IVehicle } from '../models/IVehicle';
import { IFilm } from '../models/IFilm';

import * as $ from 'jquery';

@Injectable()
export class SWApiService {

  private baseUrl: String = "http://swapi.co/api"

  constructor() { }

  public GetAllCharacters(): Array<IPeople> {
    return this.getAllCharacters();
  }

  private getAllCharacters(peopleArray: Array<IPeople> = [], currentPage = 1): Array<IPeople> {
    let result = <IPeopleList>$.ajax({
      method: 'GET',
      async: false,
      url: `${this.baseUrl}/people/?page=${currentPage}&format=json`
    }).responseJSON;
    if (result !== undefined && result != null) {
      if (result.next == null) {
        return peopleArray;
      } else {
        currentPage++;
        Array.prototype.push.apply(peopleArray, result.results);
        return this.getAllCharacters(peopleArray, currentPage);
      }
    } else {
      return [];
    }
  }

}
