import { NgModule } from '@angular/core';

import { MoviesListComponent } from './movies/pages/movies-list/movies-list.component';
import { MoviesAddComponent } from './movies/pages/movies-add//movies-add.component';
import { MoviesEditComponent } from './movies/pages/movies-edit//movies-edit.component';

// Componentes limpios creados solo para probar enlaces en el menú
import { ActorsListComponent } from './actors/pages/actors-list/actors-list.component';
import { StudiesListComponent } from './studies/pages/studies-list/studies-list.component';

// Modulo para trabajo con formularios.
import { FormsModule} from '@angular/forms';
// DataFormulario: Necesario para formularios por validación tipo Data.
import { ReactiveFormsModule} from '@angular/forms';

// Modulos PrimeNg
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  declarations: [
    MoviesListComponent,
    MoviesAddComponent,
    MoviesEditComponent,
    ActorsListComponent,
    StudiesListComponent
  ],
  exports: [
    MoviesListComponent,
    MoviesAddComponent,
    MoviesEditComponent
  ]
})
export class FeaturesModule { }
