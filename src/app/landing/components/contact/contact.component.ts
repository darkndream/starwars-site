import { Component, OnInit } from '@angular/core';
import { LandingViewCycle } from '../landing-view-cycle';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../frontpage/frontpage.component.scss', './contact.component.scss']
})
export class ContactComponent extends LandingViewCycle {

  constructor() { super(); }

}
