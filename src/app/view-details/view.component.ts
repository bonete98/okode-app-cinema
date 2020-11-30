import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/films.service';
import { FilmResolved, IFilm, IFilmDetails, ILanguage } from '../film/film';


@Component({
  selector: 'app-view-details',
  templateUrl: './view.component.html',
  styleUrls: ['./view-details.page.scss'],
  providers: [FilmService]
})
export class ViewComponent implements OnInit {
  public filmi: IFilmDetails;
  public loading: boolean = true;
  public languages: ILanguage[];


  searchresults;
  errorMessage: string;
  constructor(
    private filmservice: FilmService,
    private activatedRoute: ActivatedRoute,
  ) { }
  
  

  ngOnInit() {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      console.log(id);
      this.getSearch(id);
  }

  getSearch(id) {
    this.filmservice.getFilmbyId(id).subscribe(data => {
      if (data) {
       this.filmi = data;
       this.languages = this.filmi.spoken_languages;
       console.log(this.filmi);
       this.loading = false;
       console.log(this.loading);
      }
    })
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}