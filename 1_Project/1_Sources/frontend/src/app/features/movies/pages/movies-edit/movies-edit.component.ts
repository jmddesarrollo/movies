import { Component, OnInit, OnDestroy } from '@angular/core';

// Servicios
import { MoviesService } from '../../../service.index';

// Modelos
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent implements OnInit, OnDestroy {
  public movieObj: MovieModel;

  private observables = new Array();

  constructor(
    private moviesService: MoviesService
  ) { 
    this.movieObj = {
      "id": 11,
      "title": "Silencio de los corderos v2",
      "poster": "http://dummyimage.com/400x600.png/cc0000/ffffff",
      "genre": ["Action", "Romance"],
      "year": 1990,
      "duration": 180,
      "imdbRating": 9.27,
      "actors": [4, 5, 6]
    };

    this.observables = [];
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    for (const ob of this.observables) {
      if (ob !== undefined && ob !== null) {
        ob.unsubscribe();
      }
    }
  }  

  editMovie() {
    const data = this.movieObj;

    const ob = this.moviesService.edit(data).subscribe((response: MovieModel) => {
      console.log('Respuesta del edit');
      console.log(response);
    }); 
    
    this.observables.push(ob);
  } 
  
  deleteMovie(id: number) {
    
    const ob = this.moviesService.delete(id).subscribe((response: MovieModel) => {
      console.log('Respuesta del delete');
      console.log(response);
    });   
    
    this.observables.push(ob);
  }  

}
