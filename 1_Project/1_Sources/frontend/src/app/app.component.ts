import { Component } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    public translateService: TranslateService,
    private primeNGConfig: PrimeNGConfig
  ) {
    this.translateService.addLangs(['es', 'en']);
    this.translateService.setDefaultLang('es');
    this.translateService.use('es');

    this.translateService.get('primeng').subscribe(res => this.primeNGConfig.setTranslation(res));
  }
}
