import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

// Servicios
import { ActorsService, MoviesService } from '../../../service.index';
import { TitleShareService } from '../../../../shared/title/services/title.service';
import { ConfirmationService, MessageService } from 'primeng/api';

// Modelos
import { MovieModel } from '../../models/movie.model';
import { ActorModel } from '../../../actors/models/actor.model';


@Component({
  selector: 'app-movie-manager',
  templateUrl: './movie-manager.component.html',
  styleUrls: ['./movie-manager.component.css']
})
export class MovieManagerComponent implements OnInit, OnDestroy {
  public loading: boolean;
  public movieId: number;
  public movie: MovieModel;
  public genres: Genre[];
  public selectedGenres: Genre[];
  public genresStr: string[];
  public actors: ActorModel[];  
  public actorsInterface: ActorsInterface[];
  public selectedActors: ActorsInterface[];
  public actorsIds: number[];

  public forma: FormGroup;

  private observables = new Array();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private actorsService: ActorsService,
    private moviesService: MoviesService,
    private titleShareService: TitleShareService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService    
  ) { 
    this.loading = true;
    this.movieId = 0;
    this.genres = [
      {name: 'Action'},
      {name: 'Adventure'},
      {name: 'Animation'},
      {name: 'Comedy'},
      {name: 'Crime'},
      {name: 'Drama'},
      {name: 'Horror'},
      {name: 'Musical'},
      {name: 'Romance'},
      {name: 'Sci-Fi'},
      {name: 'Thriller'},
      {name: 'War'},
    ];
    this.actors = [];
    this.selectedActors = [];
    this.actorsInterface = []; 
    this.actorsIds = [];

    this.selectedGenres = [];   
    this.genresStr = [];

    this.movie = {id: 0, title: '', poster: '', genre: [], year: 1950, duration: 0, imdbRating: 0, actors: []};

    this.forma = new FormGroup({
      'id': new FormControl(0),
      'title': new FormControl('', [Validators.required, Validators.pattern('^([A-Za-zñÑÁÉÍÓÚÄËÏÖÜáéíóúäëïöüÇç&\'\,\’\?\¿\/().:_-]+[\\s]*){1,100}$')]),
      'poster': new FormControl('', [Validators.pattern('^[0-9a-zA-Z]([-./:\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\’\/\\\+&amp;%\$#_]*){1,100}$')]),
      'genre': new FormControl([]),
      'year': new FormControl(1950, [Validators.required, Validators.pattern('^(19[0-9][0-9]|20[0-9][0-9])$')]),
      'duration': new FormControl(0, [Validators.required, Validators.pattern('^[0-9]|([0-9][0-9][0-9])$')]),      
      'imdbRating': new FormControl(0, [Validators.required, Validators.pattern('^[0-9]|([0-1][0-9])$')]),
      'actors': new FormControl([])
    });

    this.observables = [];
  }

  ngOnInit(): void {
    // Recoger id de la película la url
    this.activatedRoute.params.forEach((params: Params) => {
      this.movieId = params['id']; 

      if(this.movieId != 0) {
        // Consultar pelicula
        this.getMovie();
      } else {
        this.loading = false;
        this.titleShareService.changeTitle('Nueva película');
      }
    }); 
    
    this.getAllActors();
  }

  ngOnDestroy() {
    for (const ob of this.observables) {
      if (ob !== undefined && ob !== null) {
        ob.unsubscribe();
      }
    }
  }    

  cancel() {
    this.router.navigate(["/movies-list"]);
  }

  saveData() {
    this.movie = this.forma.value;

    this.setGenresStr();
    this.setActorsId();

    if (this.movie.id) {
      this.editMovie();
    } else {
      this.addMovie();
    }
  }
  addMovie() {
    this.moviesService.add(this.movie).subscribe((response: MovieModel) => {
      const message = 'Alta de la película realizada correctamente';
      this.messageService.add({ severity: 'success', summary: 'Alta', detail: message, life: 2000 });
    }, (error: any) => {
      const message = 'Se ha producido un error en el alta del disositivo';
      this.messageService.add({ severity: 'error', summary: 'Error', detail: message, life: 3000});
    }); 
  }

  editMovie() {
    this.moviesService.edit(this.movie).subscribe((response: MovieModel) => {
      const message = 'Edición de la película realizada correctamente';
      this.messageService.add({ severity: 'success', summary: 'Edición', detail: message, life: 2000 });
    }, (error: any) => {
      const message = 'Se ha producido un error en la edición del disositivo';
      this.messageService.add({ severity: 'error', summary: 'Error', detail: message, life: 3000});
    });
  }

  deleteMovieConfirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Desea eliminar la película "' + this.movie.title + '"?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: "Eliminar",
      rejectLabel: "Cancelar",
      accept: () => {
        this.deleteMovie();  
      },
      reject: () => {

      }
    });     
  }

  deleteMovie() {
    this.moviesService.delete(this.movie.id).subscribe(() => {
      const message = 'Eliminación de la película realizada correctamente';

      this.messageService.add({ severity: 'success', summary: 'Eliminación', detail: message, life: 2000 });
    }, (error: any) => {
      const message = 'Se ha producido un error en la eliminación del disositivo';
      this.messageService.add({ severity: 'error', summary: 'Error', detail: message, life: 3000});
    });      
  }

  getMovie() {
    const ob = this.moviesService.get(this.movieId).subscribe((response: any) => {
      this.movie = response;

      this.setGenresSelected();        

      this.forma.setValue(this.movie);
      this.titleShareService.changeTitle(this.movie.title);

      this.loading = false;
    }, (error: any) => {
      this.cancel();
    });

    this.observables.push(ob);
  }  

  getAllActors() {
    const ob = this.actorsService.getAll().subscribe((response: any) => {
      this.actors = response;

      this.setActorsInterface();
    });

    this.observables.push(ob);
  }
  
  setActorsInterface() {
    for (let actor of this.actors) {
      const actorInterface: ActorsInterface = {
        id: actor.id,
        name: actor.last_name + ', ' + actor.first_name
      }
      this.actorsInterface.push(actorInterface);
    }

    this.setActorsSelected();
  }

  setGenresSelected() {
    for (let genre of this.movie.genre) {
      const obj: Genre = { name: genre }
      this.selectedGenres.push(obj);
    }
  }

  setGenresStr() {
    this.genresStr = [];
    for (let genre of this.selectedGenres) {
      this.genresStr.push(genre.name);
    } 
    this.movie.genre = this.genresStr;
  }

  setActorsSelected() {
    for (let actorId of this.movie.actors) {
      const actorInterface = this.actorsInterface.find(aI => aI.id == actorId);

      if (actorInterface) {
        this.selectedActors.push(actorInterface);
      }
    }
    this.selectedActors = [...this.selectedActors];    
  }

  setActorsId() {
    this.actorsIds = [];
    for (let actor of this.selectedActors) {
      this.actorsIds.push(actor.id);
    } 
    this.movie.actors = this.actorsIds;  
  }

}

interface Genre {
  name: string
}

interface ActorsInterface {
  id: number,
  name: string
}