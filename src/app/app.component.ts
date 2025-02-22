import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';



import { addIcons } from 'ionicons';
import { home, camera, settings } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

  imports: [IonicModule, RouterLink, CommonModule],
})  

  export class AppComponent {
    showTabs = false;
    private pagesWithTabs = ['/principal-page', '/cameras', '/setting'];
  
    constructor(private router: Router) {
        addIcons({ home, camera, settings });
    
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.updateTabsVisibility();
        }
      });
    }
  
    updateTabsVisibility() {
      this.showTabs = this.pagesWithTabs.includes(this.router.url);
    }

}

