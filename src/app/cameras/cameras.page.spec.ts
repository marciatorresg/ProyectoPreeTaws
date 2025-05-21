import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamerasPage } from './cameras.page';
import { DataService } from '../data.service';
import { Component } from '@angular/core';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar],
})
export class ExampleComponent {}

describe('CamerasPage', () => {
  let component: CamerasPage;
  let fixture: ComponentFixture<CamerasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
