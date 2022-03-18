import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesAddComponent } from './features/movies/pages/movies-add/movies-add.component';
import { MoviesEditComponent } from './features/movies/pages/movies-edit/movies-edit.component';
import { MoviesListComponent } from './features/movies/pages/movies-list/movies-list.component';
import { ActorsListComponent } from './features/actors/pages/actors-list/actors-list.component';
import { StudiesListComponent } from './features/studies/pages/studies-list/studies-list.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent, data: {titulo: 'Películas'} },
  { path: 'movies-list', component: MoviesListComponent, data: {titulo: 'Películas'}  },
  { path: 'movies-add', component: MoviesAddComponent, data: {titulo: 'Nueva película'} },
  { path: 'movies-edit/:id', component: MoviesEditComponent, data: {titulo: 'Editar película'} },  
  { path: 'actors-list', component: ActorsListComponent, data: {titulo: 'Actores'}  },
  { path: 'studies-list', component: StudiesListComponent, data: {titulo: 'Estudios'}  },
  { path: '**', component: MoviesListComponent, data: {titulo: 'Películas'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
