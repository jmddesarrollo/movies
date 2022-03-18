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

  add(data: MovieModel): any {
    const body=JSON.stringify(data);

    return this.httpClient.post(this.url, body, {'headers': this.headers} );
  }

  edit(data: MovieModel): any {
    const body=JSON.stringify(data);

    return this.httpClient.put(this.url + '/' + data.id, body, {'headers': this.headers} );
  }  

}