import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { stopOutline } from 'ionicons/icons';

addIcons({ 'stop-outline': stopOutline });

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.page.html',
  styleUrls: ['./cameras.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CamerasPage {
  isDragging = false;
  offsetX = 0;
  offsetY = 0;

  startDrag(event: MouseEvent) {
    const floatingBtn = event.currentTarget as HTMLElement;
    this.isDragging = true;
    this.offsetX = event.clientX - floatingBtn.getBoundingClientRect().left;
    this.offsetY = event.clientY - floatingBtn.getBoundingClientRect().top;
  
    document.addEventListener('mousemove', this.drag.bind(this));
    document.addEventListener('mouseup', this.stopDrag.bind(this));
  }
  
  drag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    
    let clientX, clientY;
    if (event instanceof MouseEvent) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    }

    const floatingBtn = document.getElementById('floating-btn');
    if (floatingBtn) {
      let x = clientX - this.offsetX;
      let y = clientY - this.offsetY;
      floatingBtn.style.left = `${x}px`;
      floatingBtn.style.top = `${y}px`;
    }
  }

  stopDrag() {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.drag.bind(this));
    document.removeEventListener('mouseup', this.stopDrag.bind(this));
    document.removeEventListener('touchmove', this.drag.bind(this));
    document.removeEventListener('touchend', this.stopDrag.bind(this));
  }
}
