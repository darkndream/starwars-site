import { Component, OnInit } from '@angular/core';
import { InformationViewCycle } from "../information-view-cycle";
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { IPeople } from "app/information/models/IPeople";
import { SWApiService } from "../../services/swapi.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['../frontpage/frontpage.component.scss','./character.component.scss']
})
export class CharacterComponent extends InformationViewCycle {

  constructor(private route: ActivatedRoute, private swapiService: SWApiService) { super(); }
  
  private characterId: number = 0;
  private oCharacter: Observable<IPeople>|null = null;

  ngOnInit() {
    super.ngOnInit();
    this.setUpRouteValues();
    this.setUpCharacter(this.characterId);
  }

  setUpRouteValues() {
    this.characterId = parseInt(this.route.snapshot.paramMap.get('id'));
    let that = this;
    this.route.params.subscribe(params => {
      let oldCharacterId = that.characterId;
      let newCharacterId = params['id'];
      if (oldCharacterId != newCharacterId) {
        /* Something changed from this same route, reload oCharacter observable */
        this.characterId = params['id'];
      }
    });
  }

  setUpCharacter(characterId: number) {
    this.oCharacter = this.swapiService.GetCharacterObservable(characterId);
  }

}
