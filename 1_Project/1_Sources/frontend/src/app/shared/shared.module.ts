import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Servicios
import { TitleShareService } from './title/services/title.service';

// Componentes
import { MenuComponent } from './menu/menu.component';
import { TitleComponent } from './title/components/title.component';

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
  ],
  providers: [
    TitleShareService
  ]
})
export class SharedModule { }
