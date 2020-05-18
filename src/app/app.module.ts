import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavibarComponent } from './navibar/navibar.component';
import { GlobalComponent } from './global/global.component';
import { HomeComponent } from './home/home.component';
import { SafetyComponent } from './safety/safety.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    NavibarComponent,
    GlobalComponent,
    HomeComponent,
    SafetyComponent,
    NotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,

    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    InlineSVGModule.forRoot(),
    RouterModule.forRoot([
      
    ])
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
