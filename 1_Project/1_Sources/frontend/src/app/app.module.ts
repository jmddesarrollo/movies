import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modulo para trabajo con formularios.
import { FormsModule} from '@angular/forms';
// DataFormulario: Necesario para formularios por validación tipo Data.
import { ReactiveFormsModule} from '@angular/forms';

// Modulos PrimeNg
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
//

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
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,     
    MenuModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
