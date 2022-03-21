import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

// Modulo para trabajo con formularios.
import { FormsModule} from '@angular/forms';
// DataFormulario: Necesario para formularios por validación tipo Data.
import { ReactiveFormsModule} from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

// Servicios PrimeNg
import { ConfirmationService, MessageService } from 'primeng/api';

// Modulos PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// Componentes limpios creados solo para probar enlaces en el menú
import { ActorsListComponent } from './actors/pages/actors-list/actors-list.component';
import { StudiesListComponent } from './studies/pages/studies-list/studies-list.component';

// Componentes
import { MoviesListComponent } from './movies/pages/movies-list/movies-list.component';
import { MovieDetailComponent } from './movies/components/movie-detail/movie-detail.component';
import { MovieManagerComponent } from './movies/pages/movie-manager/movie-manager.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,    
    CommonModule,
    ButtonModule,
    CardModule,
    ConfirmPopupModule,
    InputNumberModule,
    InputTextModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    TranslateModule
  ],
  declarations: [
    MoviesListComponent,
    ActorsListComponent,
    StudiesListComponent,
    MovieDetailComponent,
    MovieManagerComponent
  ],
  exports: [
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class FeaturesModule { }
