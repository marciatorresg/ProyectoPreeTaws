import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule]
})
export class LogPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
