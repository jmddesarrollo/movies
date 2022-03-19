import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

// Modulo para trabajo con formularios.
import { FormsModule} from '@angular/forms';
// DataFormulario: Necesario para formularios por validación tipo Data.
import { ReactiveFormsModule} from '@angular/forms';

// Modulos PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// Componentes limpios creados solo para probar enlaces en el menú
import { ActorsListComponent } from './actors/pages/actors-list/actors-list.component';
import { StudiesListComponent } from './studies/pages/studies-list/studies-list.component';

// Componentes
import { MoviesListComponent } from './movies/pages/movies-list/movies-list.component';
import { MoviesAddComponent } from './movies/pages/movies-add//movies-add.component';
import { MoviesEditComponent } from './movies/pages/movies-edit//movies-edit.component';
import { MovieDetailComponent } from './movies/components/movie-detail/movie-detail.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,    
    CommonModule,
    ButtonModule,
    CardModule,
    ProgressSpinnerModule
  ],
  declarations: [
    MoviesListComponent,
    MoviesAddComponent,
    MoviesEditComponent,
    ActorsListComponent,
    StudiesListComponent,
    MovieDetailComponent
  ],
  exports: [
    MoviesListComponent,
    MoviesAddComponent,
    MoviesEditComponent
  ]
})
export class FeaturesModule { }
