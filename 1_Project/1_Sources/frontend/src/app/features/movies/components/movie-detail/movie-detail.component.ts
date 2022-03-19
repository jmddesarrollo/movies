import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Modelos
import { MovieModel } from '../../models/movie.model';
import { ActorModel } from '../../../actors/models/actor.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: MovieModel;
  @Input() actors: ActorModel[];

  public actorsMovie: ActorModel[];

  constructor(
    private router: Router
  ) { 
    this.movie = {
      id: 0,
      title: '',
      poster: '',
      genre: [],
      year: 0,
      duration: 0,
      imdbRating: 0,
      actors: []
    };
    this.actors = [];
    this.actorsMovie = [];
  }

  ngOnInit(): void {
    this.getActorsMovie();
  }

  getActorsMovie() {
    for(let actorId of this.movie.actors) {
      const actor: any = this.actors.find(a => a.id === actorId);

      if (actor) {
        this.actorsMovie.push(actor);
      }   
    }
  }

  managerMovie() {
    this.router.navigate(["/movies-manager/" + this.movie.id]);
  }

}
