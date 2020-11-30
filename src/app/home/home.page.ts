import { Component } from '@angular/core';
import { IFilm } from '../film/film';
import { IResultSearch } from '../film/resultsearch';
import { FilmService } from '../services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**
   * La variable searchresults registrará el resultado de la búsqueda si ha sido existosa o no, filmService será un variable que utilice el servicio creado para
   * acceder a la API, filteredfilms serán las películas filtradas   
   */
  searchresults: IResultSearch;
  private filmService;
  constructor(_filmService: FilmService) { this.filmService = _filmService;}
  filteredFilms: IFilm[] = [];

  /**
   * 
   * @param ev será el evento identificado, que indica que se ha modificado la barra de búsqueda, en el método se se filtrarán los nombres a partir de la llamada a la API
   */
  performFilter(ev: any){
    let filter = ev.target.value;
    filter = filter.toLocaleLowerCase();
    filter = filter.replace(/\s+/g, '+');
    if (filter != ''){
      this.filmService.getFilmName(filter).subscribe({
        next: results => {
          if (results) {
           this.searchresults = results;
           if (this.searchresults.total_results != 0) {
             this.filteredFilms = this.searchresults.results;
          } else {
            this.filteredFilms = [];
          }
          } 
        }  
      })
    }
    
  }
  ngOnInit() {
      this.filmService.getFilms().subscribe(data => {
        if (data) {
          console.log(data);
          this.searchresults = data;
          console.log(this.searchresults);
          if (this.searchresults.total_results != 0) {
            this.filteredFilms = this.searchresults.results;
        }
      }
    });
    
  }

  isIos() {
     const win = window as any;
     return win && win.Ionic && win.Ionic.mode === 'ios';
   }

}
