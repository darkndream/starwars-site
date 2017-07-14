import { Component, OnInit } from '@angular/core';
import { InformationViewCycle } from '../information-view-cycle';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent extends InformationViewCycle {

  constructor() { super(); }


}
