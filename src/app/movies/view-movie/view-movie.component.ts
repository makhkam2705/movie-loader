import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";
import {MovieApiService} from "../movie-api.service";

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss']
})
export class ViewMovieComponent implements OnInit {

  public movieId: number = 0;
  public movieData: any = '';
  public movieGenre: any[] = [];
  public src: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieApiService: MovieApiService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.movieId = data['id'];
      this.movieApiService.getTrailers(this.movieId).subscribe(trailerData => {
        this.src = this.sanitize(trailerData.results[0].key)
      });
      this.movieApiService.getDetail(this.movieId).subscribe(movieDetail => {
        this.movieData = movieDetail;
        this.movieGenre = movieDetail.genres;
      });
    });
  };

  private sanitize(id: string) {
    const url = 'https://www.youtube.com/embed/' + id
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
