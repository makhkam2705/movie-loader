import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit {

  categoryId: number = 0;
  categoryList: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(categoryData => {
      this.categoryId = categoryData['id'];
      this.movieApiService.getMovieCategory(this.categoryId)
        .subscribe(movieData => {
          this.categoryList = movieData.results;
        });
      });
    }

  }
