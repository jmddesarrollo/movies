import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Traducción importada desde app.module
import { TranslateModule } from '@ngx-translate/core';

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
    RippleModule,
    TranslateModule
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
