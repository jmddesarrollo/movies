import { Component, OnInit } from '@angular/core';

// Servicios
import { MoviesService } from '../../../service.index';

// Modelos
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  public loading: boolean;
  public moviesObj: MovieModel[];

  constructor(
    private moviesService: MoviesService
  ) {
    this.loading = true;
    this.moviesObj = [];
  }

  ngOnInit(): void {
    this.getAll();  
  }

  getAll() {
    this.loading = true;
    this.moviesService.getAll().subscribe((response: any) => {
      console.log('Respuesta del subscribe');

      this.moviesObj = response;

      console.log(this.moviesObj);
    });
  }

}
