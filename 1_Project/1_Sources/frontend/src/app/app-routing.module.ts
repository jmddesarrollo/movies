import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieManagerComponent } from './features/movies/pages/movie-manager/movie-manager.component';
import { MoviesListComponent } from './features/movies/pages/movies-list/movies-list.component';
import { ActorsListComponent } from './features/actors/pages/actors-list/actors-list.component';
import { StudiesListComponent } from './features/studies/pages/studies-list/studies-list.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent, data: {titulo: 'Películas'} },
  { path: 'movies-list', component: MoviesListComponent, data: {titulo: 'Películas'}  },
  { path: 'movies-manager/:id', component: MovieManagerComponent, data: {titulo: 'Gestionar película'} },  
  { path: 'actors-list', component: ActorsListComponent, data: {titulo: 'Actores'}  },
  { path: 'studies-list', component: StudiesListComponent, data: {titulo: 'Estudios'}  },
  { path: '**', component: MoviesListComponent, data: {titulo: 'Películas'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
