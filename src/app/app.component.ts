import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Roupas', url: '/folder/Roupas', icon: 'shirt' },
    { title: 'Acessórios', url: '/folder/Acessórios', icon: 'american-football' },
    { title: 'Calçados', url: '/folder/Calçados', icon: 'footsteps' },
    { title: 'Equipamentos', url: '/folder/Equipamentos', icon: 'barbell' },

  ];

  constructor() {}
}
