import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';


import { addIcons } from 'ionicons';
import { home, camera, settings } from 'ionicons/icons';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [IonApp, IonRouterOutlet, IonIcon, IonTabBar, IonTabButton, IonTabs, RouterLink],
})
export class AppComponent {
  constructor() {

    addIcons({ home, camera, settings });
  }
}
