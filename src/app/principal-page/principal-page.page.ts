
import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { stopOutline } from 'ionicons/icons';

addIcons({ 'stop-outline': stopOutline });


@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.page.html',
  styleUrls: ['./principal-page.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule]
})
export class PrincipalPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} 

