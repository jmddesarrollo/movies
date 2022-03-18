import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { TitleComponent } from './title/title.component';

// Modulos PrimeNg
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,     
    MenuModule,
    RippleModule
  ],
  declarations: [
    MenuComponent,
    TitleComponent
  ],
  exports: [
    MenuComponent,
    TitleComponent
  ]
})
export class SharedModule { }
