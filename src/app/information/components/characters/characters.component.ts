import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { InformationViewCycle } from '../information-view-cycle';

import { SWApiService } from '../../services/swapi.service';

import { IPeople } from '../../models/IPeople';
import { IAlert } from '../../models/IAlert';

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
    let that = this;
    //setTimeout(()=>{
      that.characters = that.swapiService.GetAllCharacters();
      if (that.characters.length <= 0) {
        that.alert.message = "No se han encontrado resultados <i class='fa fa-cog fa-spin'></i>";
        that.alert.type = "warning";
      }
      that.cdRef.detectChanges();
    //},3000);
  }

}
