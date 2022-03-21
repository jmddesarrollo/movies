import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public title: string;
  public items: MenuItem[];

  constructor(
    private translateService: TranslateService
  ) { 
    this.title = '';
    this.items = [];
  }

  ngOnInit(): void {
    this.title = 'A definir';

    // this.items = [
    //   { label: 'Películas', icon: 'pi pi-fw pi-video', routerLink: ['/movies-list'] },
    //   { label: 'Actores', icon: 'pi pi-fw pi-users', routerLink: ['/actors-list']},
    //   { label: 'Estudios', icon: 'pi pi-fw pi-home', routerLink: ['/studies-list'] }
    // ]; 

    this.translateService.onLangChange.subscribe( (translate: any) => {
      this.items= [
        { label: translate.translations['Películas'], icon: 'pi pi-fw pi-video', routerLink: ['/movies-list'] },
        { label: translate.translations['Actores'], icon: 'pi pi-fw pi-users', routerLink: ['/actors-list'] },
        { label: translate.translations['Estudios'], icon: 'pi pi-fw pi-home', routerLink: ['/studies-list'] }
      ];
    });

  }

}

interface ItemInterface {
  label: string,
  icon: string,
  routerLink: []
}
