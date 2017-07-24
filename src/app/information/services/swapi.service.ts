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

  public GetCharacterStarships(character: IPeople): Array<IStarship> {
    let arrayOfStarships: Array<IStarship> = [];
    character.starships.forEach(starshipUrl => {
      let result = <IStarship>$.ajax({
        method: 'GET',
        async: false,
        url: <string>starshipUrl
      }).responseJSON;
      if (result !== undefined && result != null) {
        arrayOfStarships.push(result);
      }
    });
    return arrayOfStarships;
  }

  public GetCharacterVehicles(character: IPeople): Array<IVehicle> {
    let arrayOfVehicles: Array<IVehicle> = [];
    character.vehicles.forEach(vehicleUrl => {
      let result = <IVehicle>$.ajax({
        method: 'GET',
        async: false,
        url: <string>vehicleUrl
      }).responseJSON;
      if (result !== undefined && result != null) {
        arrayOfVehicles.push(result);
      }
    });
    return arrayOfVehicles;
  }

  public GetCharacterFilms(character: IPeople): Array<IFilm> {
    let arrayOfFilms: Array<IFilm> = [];
    character.films.forEach(filmUrl => {
      let result = <IFilm>$.ajax({
        method: 'GET',
        async: false,
        url: <string>filmUrl
      }).responseJSON;
      if (result !== undefined && result != null) {
        arrayOfFilms.push(result);
      }
    });
    return arrayOfFilms;
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
