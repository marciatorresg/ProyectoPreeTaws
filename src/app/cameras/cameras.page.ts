import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

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

  constructor(private router: Router) {}

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.offsetX = event.clientX - (event.target as HTMLElement).getBoundingClientRect().left;
    this.offsetY = event.clientY - (event.target as HTMLElement).getBoundingClientRect().top;
    document.addEventListener('mousemove', this.drag.bind(this));
    document.addEventListener('mouseup', this.stopDrag.bind(this));
  }

  drag(event: MouseEvent) {
    if (!this.isDragging) return;
    const floatingBtn = document.getElementById('floating-btn');
    if (floatingBtn) {
      let x = event.clientX - this.offsetX;
      let y = event.clientY - this.offsetY;
      floatingBtn.style.left = `${x}px`;
      floatingBtn.style.top = `${y}px`;
    }
  }

  stopDrag() {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.drag.bind(this));
    document.removeEventListener('mouseup', this.stopDrag.bind(this));
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
