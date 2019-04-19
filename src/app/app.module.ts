import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {SQLite} from '@ionic-native/sqlite/ngx'

import {HttpClient, HttpClientModule} from '@angular/common/http';

import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ 
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID,useValue:'pt-BR'}, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
