import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesAddComponent } from './components/movies/movies-add/movies-add.component';
import { MoviesEditComponent } from './components/movies/movies-edit/movies-edit.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';


const routes: Routes = [
  { path: '', component: MoviesListComponent, data: {titulo: 'Películas'} },
  { path: 'movies-list', component: MoviesListComponent, data: {titulo: 'Películas'}  },
  { path: 'movies-add', component: MoviesAddComponent, data: {titulo: 'Nueva película'} },
  { path: 'movies-edit/:id', component: MoviesEditComponent, data: {titulo: 'Editar película'} },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
