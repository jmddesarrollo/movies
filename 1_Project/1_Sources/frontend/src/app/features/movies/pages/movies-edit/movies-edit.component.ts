import { Component, OnInit } from '@angular/core';

// Servicios
import { MoviesService } from '../../../service.index';

// Modelos
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent implements OnInit {
  public movieObj: MovieModel;

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
  }

  ngOnInit(): void {
  }

  editMovie() {
    const data = this.movieObj;

    this.moviesService.edit(data).subscribe((response: MovieModel) => {
      console.log('Respuesta del edit');
      console.log(response);
    });    
  } 
  
  deleteMovie(id: number) {
    
    this.moviesService.delete(id).subscribe((response: MovieModel) => {
      console.log('Respuesta del delete');
      console.log(response);
    });    
  }  

}
