import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// Servicios
import { MoviesService, ActorsService } from '../../../service.index';
import { TitleShareService } from '../../../../shared/title/services/title.service';
import { MessageService } from 'primeng/api';

// Modelos
import { MovieModel } from '../../models/movie.model';
import { ActorModel } from '../../../actors/models/actor.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  public title: string;
  public loadingMovies: boolean;
  public loadingActors: boolean;
  public moviesObj: MovieModel[];
  public actorsObj: ActorModel[];

  private observables = new Array();

  constructor(
    private moviesService: MoviesService,
    private actorsService: ActorsService,
    private titleShareService: TitleShareService,
    private router: Router,
    private messageService: MessageService 
  ) {
    this.title = 'Películas';
    this.loadingMovies = true;
    this.loadingActors = true;
    this.moviesObj = [];
    this.actorsObj = [];
    
    this.observables = [];
  }

  ngOnInit(): void {    
    this.setTitle();
    this.getAllMovies();   
    this.getAllActors();   
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
    this.loadingMovies = true;
    const ob = this.moviesService.getAll().subscribe((response: any) => {
      this.moviesObj = response;

      this.loadingMovies = false;
    }, (error: any) => {
      const message = 'Se ha producido un error en la consulta de las películas';
      this.messageService.add({ severity: 'error', summary: 'Error', detail: message, life: 3000});

      this.loadingMovies = false;
    });

    this.observables.push(ob);
  }

  getAllActors() {
    this.loadingActors = true;
    const ob = this.actorsService.getAll().subscribe((response: any) => {
      this.actorsObj = response;

      this.loadingActors = false;
    }, (error: any) => {
      const message = 'Se ha producido un error en la consulta de los actores';
      this.messageService.add({ severity: 'error', summary: 'Error', detail: message, life: 3000});

      this.loadingActors = false;
    });

    this.observables.push(ob);
  }  

  addMovie() {
    this.router.navigate(['/movies-manager/0']);
  }

}
