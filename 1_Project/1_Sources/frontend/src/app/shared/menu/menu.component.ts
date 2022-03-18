import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public title: string;
  public items: MenuItem[];

  constructor() { 
    this.title = '';
    this.items = [];
  }

  ngOnInit(): void {
    this.title = 'A definir';

    this.items = [
      {
        items: [
          { label: 'Películas', icon: 'pi pi-fw pi-video', routerLink: ['/movies-list'] },
          { label: 'Actores', icon: 'pi pi-fw pi-users', routerLink: ['/actors-list']},
          { label: 'Estudios', icon: 'pi pi-fw pi-home', routerLink: ['/studies-list'] }
        ],
      },
    ]; 
  }

}
