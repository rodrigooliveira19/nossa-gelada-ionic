import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
  
    {
      title: 'Estabelecimento',
      url: '/estabelecimento-list',
      icon: 'list'
    },
    {
      title: 'Marca',
      url: '/marca-list',
      icon: 'list'
    },
    {
      title: 'Unidade',
      url: '/unidade-list',
      icon: 'list'
    },
    {
      title: 'Filtro',
      url: '/filtro-list',
      icon: 'list'
    },
    {
      title: 'Cesta',
      url: '/cesta-cad',
      icon: 'list'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
