import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/movies/movie-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  movieLists: any[] = [];

  constructor(private movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this.movieApiService.getMovieList().subscribe(listData => {
      this.movieLists = listData.genres;
    })
  }

}
