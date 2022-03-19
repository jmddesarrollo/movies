import { Component, OnInit, OnDestroy } from '@angular/core';

// Servicios
import { MoviesService } from '../../../service.index';
import { TitleShareService } from '../../../../shared/title/services/title.service';

// Modelos
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  public title: string;
  public loading: boolean;
  public moviesObj: MovieModel[];

  private observables = new Array();

  constructor(
    private moviesService: MoviesService,
    private titleShareService: TitleShareService
  ) {
    this.title = 'Películas';
    this.loading = true;
    this.moviesObj = [];
    
    this.observables = [];
  }

  ngOnInit(): void {    
    this.setTitle();
    this.getAllMovies();      
  }

  ngOnDestroy() {
    for (const ob of this.observables) {
      if (ob !== undefined && ob !== null) {
        ob.unsubscribe();
      }
    }
  }  

  setTitle() {
    this.titleShareService.changeTitle(this.title); 
  }

  getAllMovies() {
    this.loading = true;
    const ob = this.moviesService.getAll().subscribe((response: any) => {
      console.log('Respuesta getAll');

      this.moviesObj = response;

      console.log(this.moviesObj);
      this.loading = false;
    });

    this.observables.push(ob);
  }

}
