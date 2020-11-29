import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IResultSearch } from '../film/resultsearch';

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
     *  llamada a la API del servicio web de películas
     */
    getFilms(): Observable<IResultSearch>{
        return this.http.get<IResultSearch>(`https://api.themoviedb.org/3/search/movie?api_key=90a26f5eee68aa446bcd8c92cbdc782e&query=a`) 
    }

    /**
     * 
     * @param name será el nombre de la película a buscar a través de la llamada a la API, y el método devolverá las películas que empiecen por ese nombre
     */
    getFilmName(name): Observable<IResultSearch>{
        return this.http.get<IResultSearch>(`https://api.themoviedb.org/3/search/movie?api_key=90a26f5eee68aa446bcd8c92cbdc782e&query=${name}`)
    }
    
    /**
     * 
     * @param id será el identificador de la película a buscar de la cuál se mostrarán sus detalles
     */
    getFilmbyId(id): Observable<any>{
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/' + id + '?api_key=90a26f5eee68aa446bcd8c92cbdc782e`)
    }
}