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

  
  searchresults: IResultSearch;
  private filmService;
  constructor(_filmService: FilmService) { this.filmService = _filmService;}

  _listFilter: string = '';
  filteredFilms: IFilm[] = [];

  get listFilter(): string {
    return this._listFilter;
  }
  
  set listFilter(v : string) {
    this._listFilter = v;
    this.performFilter(this.listFilter);
  }
  
  performFilter(ev: any){
    let filter = ev.target.value;
    filter = filter.toLocaleLowerCase();
    filter = filter.replace(/\s+/g, '+');

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
  ngOnInit() {
  //  this.filteredFilms = [{
  //     original_title: "El padrino",
  //     poster_path: "/eveev",
  //     video: false,
  //     vote_average: 40,
  //     vote_count: 30,
  //     release_date: new Date(2017, 4, 4),
  //     title: "El padrino",
  //     popularity: 60,
  //     adult: false,
  //     id: 30,
  //     overview: "muy yyy",
  //     genre_ids: [2, 3],
  //     backdrop_path: "hola",
  //     original_language: "english",
  // }]
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
