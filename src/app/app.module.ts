import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LandingModule } from './landing/landing.module';
import { InformationModule } from './information/information.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    LandingModule,
    InformationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
