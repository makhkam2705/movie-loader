import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';


@NgModule({
  declarations: [
    MoviesComponent,
    ViewMovieComponent,
    MovieCategoryComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
