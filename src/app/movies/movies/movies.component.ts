import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movieDetails: any = [];

  constructor(private movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this.movieApiService.getMovie()
      .subscribe(movieData => {
        this.movieDetails = movieData.results;
      });
  }

}
