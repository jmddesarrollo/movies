import { Component, OnInit } from '@angular/core';

// Servicios
import { MoviesService } from '../../../service.index';

// Modelos
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {
  public movieObj: MovieModel;

  constructor(
    private moviesService: MoviesService
  ) { 
    this.movieObj = {
      "id": 0,
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

  addMovie() {
    const data = this.movieObj;

    this.moviesService.add(data).subscribe((response: MovieModel) => {
      console.log('Respuesta del add');
      console.log(response);
    });    
  }

}
