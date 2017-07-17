import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { InformationViewCycle } from '../information-view-cycle';

import { SWApiService } from '../../services/swapi.service';

import { IPeople } from '../../models/IPeople';
import { IAlert } from '../../models/IAlert';

import * as $ from 'jquery';
import "datatables.net";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['../frontpage/frontpage.component.scss','./characters.component.scss']
})
export class CharactersComponent extends InformationViewCycle implements AfterViewInit {

  public characters: Array<IPeople> = [];
  public alert: IAlert = {
    id:1,
    message: 'Cargando...',
    type: 'info'
  };

  constructor(
    private swapiService: SWApiService,
    private cdRef: ChangeDetectorRef
  ) { 
    super(); 
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    this.characters = this.swapiService.GetAllCharacters();
    if (this.characters.length <= 0) {
      this.alert.message = "No se han encontrado resultados <i class='fa fa-cog fa-spin'></i>";
      this.alert.type = "warning";
    }
    this.cdRef.detectChanges();
    $('#charactersTable').DataTable();
  }

}
