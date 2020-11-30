import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { IResultSearch } from '../film/resultsearch';
import { catchError } from 'rxjs/operators'
import { IFilm, IFilmDetails } from '../film/film';
import { environment } from 'src/environments/environment';

/**
 *  el servicio será accedible a todos los componentes 
 */
@Injectable({
    providedIn: 'root' 
})

export class FilmService {
    private http: HttpClient;
    private baseUrl = environment.baseUrl;
    private apiKey: string = "90a26f5eee68aa446bcd8c92cbdc782e"; 
    constructor (private _http: HttpClient) {
        this.http = _http;
    }
    
    /**
     *  llamada a la API del servicio web de películas, accede a todas las películas que empiecen o contengan la a
     */
    getFilms(): Observable<IResultSearch>{
        return this.http.get<IResultSearch>(`${this.baseUrl}3/search/movie?api_key=${this.apiKey}&query=a`).pipe(
            catchError(this.handleError)
        ); 
    }

    /**
     * 
     * @param name será el nombre de la película a buscar a través de la llamada a la API, y el método devolverá las películas que empiecen por ese nombre o lo contengan
     */
    getFilmName(name): Observable<IResultSearch>{
        return this.http.get<IResultSearch>(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${name}`).pipe(
            catchError(this.handleError)
        ); 
    }
    
    /**
     * 
     * @param id será el identificador de la película a buscar de la cuál se mostrarán sus detalles
     */
    getFilmbyId(id): Observable<IFilmDetails>{
        return this.http.get<IFilmDetails>(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`).pipe(
            catchError(this.handleError)
        ); 
    }
    /**
     * 
     * @param err indicará el tipo de error sucedido, su estado. En el método se devolverá el mensaje de error sucedido  
     */
    private handleError(err) {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error ocurred ${err.error.message}`
        } else {
            errorMessage = `Backend returned ${err.status}`
        }
        console.error(err);
        return throwError(errorMessage);
    }
}