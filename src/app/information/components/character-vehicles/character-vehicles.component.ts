import { Component, OnInit, Input } from '@angular/core';
import { IPeople } from "../../models/IPeople";
import { SWApiService } from "../../services/swapi.service";

import { Observable } from "rxjs";
import 'rxjs/Rx';
import { IVehicle } from "../../models/IVehicle";

@Component({
  selector: 'app-character-vehicles',
  templateUrl: './character-vehicles.component.html',
  styleUrls: ['./character-vehicles.component.scss']
})
export class CharacterVehiclesComponent implements OnInit {

  @Input()
  public character: IPeople;

  public vehicles: Array<IVehicle> = [];

  public isLoading: boolean = true;
  public completion: number = 0;
  public loadedVehicles: number = 0;
  public totalVehicles: number = 0;

  constructor(private swapiService: SWApiService) { }

  ngOnInit() {
    this.totalVehicles = this.character.vehicles.length;
    this.requestForVehicles();
  }

  requestForVehicles() {
    console.log(this.character.vehicles);
    let that = this;
    this.swapiService
    .GetCharacterVehiclesObservable(this.character)
    .forEach(request => {
      request.subscribe(result => {
        that.vehicles.push(result);
        that.updateLoadingProgress();
        if (that.character.vehicles.length == that.vehicles.length) {
          that.didLoadVehicles();
        }
      });
    });
  }

  updateLoadingProgress() {
    this.loadedVehicles++;
    this.completion = (this.loadedVehicles / this.totalVehicles) * 100;
  }

  didLoadVehicles() {
    this.isLoading = false;
  }

}
