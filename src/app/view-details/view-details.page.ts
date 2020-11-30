import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/films.service';
import { FilmResolved, IFilm } from '../film/film';



@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.page.html',
  styleUrls: ['./view-details.page.scss'],
  providers: [FilmService]
})
export class ViewDetailsPage implements OnInit {
  public filmi: IFilm;
  public loading = true;
  private sub: any;
  private id: string = '';
  searchresults: any[];
  errorMessage: string;
  constructor(
    private filmservice: FilmService,
    private activatedRoute: ActivatedRoute,
  ) { }
  
  

  ngOnInit() {
    //  this.sub = this.activatedRoute.params.subscribe( params => {
    //    this.id = params['id'];
    //    this.filmservice.getFilmbyId(this.id).subscribe(function(data) {
    //     if (data) { 
    //        this.film = data;
    //        console.log(this.film);
    //     }
    //   })
    //  })
    // const resolvedData: FilmResolved =
    //   this.activatedRoute.snapshot.data['resolvedData'];
    // this.errorMessage = resolvedData.error;
    // this.onFilm(resolvedData.film);

     const id = +this.activatedRoute.snapshot.paramMap.get('id');
     console.log(id);
     
     this.filmservice.getFilmbyId(id).subscribe(function(data) {
       if (data) {
          this.filmi = data;
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
}
