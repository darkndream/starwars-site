import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingViewCycle } from '../landing-view-cycle';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent extends LandingViewCycle {

  constructor() {  super(); }
  
}
