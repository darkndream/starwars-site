import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingViewCycle } from '../landing-view-cycle';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./../frontpage/frontpage.component.scss', './notfound.component.scss']
})
export class NotfoundComponent extends LandingViewCycle {

  constructor() { super(); }

}
