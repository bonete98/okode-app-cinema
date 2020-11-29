import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/films.service';
import { IFilm } from '../film/film';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.page.html',
  styleUrls: ['./view-details.page.scss'],
  providers: [FilmService]
})
export class ViewDetailsPage implements OnInit {
  public film: IFilm;
  searchresults: any[];

  constructor(
    private filmservice: FilmService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.filmservice.getFilmbyId(id).subscribe(function(data) {
      if (data) {
         this.film = data.map(obj => {
          let rObj = {}
          rObj[obj.title] = obj.title;
          rObj[obj.release_date] = obj.release_date;
          rObj[obj.original_language] = obj.original_language;
          return rObj
       })
       
      }
    })
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
