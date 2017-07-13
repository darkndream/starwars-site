import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [FrontpageComponent, ContactComponent]
})
export class LandingModule { }
