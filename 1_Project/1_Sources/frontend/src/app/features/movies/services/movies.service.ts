import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

// Modelos
import { MovieModel } from '../models/movie.model';

/**
 * Servicio para API REST de películas
 */
@Injectable()
export class MoviesService {
    public headers: any;
    public url: string;

    constructor(
        private httpClient: HttpClient
    ) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.url = 'http://localhost:3000/movies';
    }

  getAll() {
    return this.httpClient.get(this.url, { headers: this.headers });
  }  
  
  get(id: number): any {
    return this.httpClient.get(this.url + '/' + id, {'headers': this.headers} );
  }

  add(data: MovieModel): any {
    const body=JSON.stringify(data);

    return this.httpClient.post(this.url, body, {'headers': this.headers} );
  }

  edit(movieObj: MovieModel): any {
    const body = JSON.stringify(movieObj);

    return this.httpClient.put(this.url + '/' + movieObj.id, body, {'headers': this.headers} );
  }  

  delete(id: number): any {
    return this.httpClient.delete(this.url + '/' + id, {'headers': this.headers} );
  }    

}