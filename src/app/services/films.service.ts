import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { IResultSearch } from '../film/resultsearch';
import { catchError } from 'rxjs/operators'

/**
 *  el servicio será accedible a todos los componentes 
 */
@Injectable({
    providedIn: 'root' 
})

export class FilmService {
    private http: HttpClient;
    constructor (private _http: HttpClient) {
        this.http = _http;
    }
    
    /**
     *  llamada a la API del servicio web de películas, accede a todas las películas que empiecen o contengan la a
     */
    getFilms(): Observable<IResultSearch>{
        return this.http.get<IResultSearch>(`https://api.themoviedb.org/3/search/movie?api_key=90a26f5eee68aa446bcd8c92cbdc782e&query=a`).pipe(
            catchError(this.handleError)
        ); 
    }

    /**
     * 
     * @param name será el nombre de la película a buscar a través de la llamada a la API, y el método devolverá las películas que empiecen por ese nombre o lo contengan
     */
    getFilmName(name): Observable<IResultSearch>{
        return this.http.get<IResultSearch>(`https://api.themoviedb.org/3/search/movie?api_key=90a26f5eee68aa446bcd8c92cbdc782e&query=${name}`).pipe(
            catchError(this.handleError)
        ); 
    }
    
    /**
     * 
     * @param id será el identificador de la película a buscar de la cuál se mostrarán sus detalles
     */
    getFilmbyId(id): Observable<any>{
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=90a26f5eee68aa446bcd8c92cbdc782e`).pipe(
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