import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

/**
 * Servicio para API REST de actores
 */
@Injectable()
export class ActorsService {
    public headers: any;
    public url: string;

    constructor(
        private httpClient: HttpClient
    ) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.url = 'http://localhost:3000/actors';
    }

  getAll() {
    return this.httpClient.get(this.url, { headers: this.headers });
  }  

}