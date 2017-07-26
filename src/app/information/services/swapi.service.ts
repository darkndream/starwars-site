import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/Operator';

import { IPeople } from '../models/IPeople';
import { IPeopleList } from '../models/IPeopleList';
import { IStarship } from '../models/IStarship';
import { IVehicle } from '../models/IVehicle';
import { IFilm } from '../models/IFilm';

import * as $ from 'jquery';

@Injectable()
export class SWApiService {

  private baseUrl: String = "http://swapi.co/api"

  
  constructor(private http: Http) { }

  public GetCharactersPageObservable(currentPage: number): Observable<IPeopleList> {
    return this.http
    .get(`${this.baseUrl}/people/?page=${currentPage}&format=json`)
    .map(result => <IPeopleList>result.json());
  }

  /* 87 Total characers */
  public GetCharacterObservable(characterNumber: number): Observable<IPeople> {
    return this.http
    .get(`${this.baseUrl}/people/${characterNumber}?format=json`)
    .map(result => <IPeople>result.json());
  }

  public GetCharacterStarshipsObservable(character: IPeople): Array<Observable<IStarship>> {
    let that = this;
    let results: Array<Observable<IStarship>> = [];
    character.starships.forEach(starship => {
      results.push(
        that.http
        .get(<string>starship)
        .map(result => <IStarship>result.json())
      );
    });
    return results;
  }

  public GetCharacterVehiclesObservable(character: IPeople): Array<Observable<IVehicle>> {
    let that = this;
    let results: Array<Observable<IVehicle>> = [];
    character.vehicles.forEach(vehicle => {
      results.push(
        that.http
        .get(<string>vehicle)
        .map(result => <IVehicle>result.json())
      );
    });
    return results;
  }

  /* OLD, UGLY AND BAD CODE */
  
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
