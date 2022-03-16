import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TitleComponent } from './components/title/title.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MoviesAddComponent } from './components/movies/movies-add/movies-add.component';
import { MoviesEditComponent } from './components/movies/movies-edit/movies-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitleComponent,
    MoviesListComponent,
    MoviesAddComponent,
    MoviesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
