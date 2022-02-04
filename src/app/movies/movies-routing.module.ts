import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { MoviesComponent } from './movies/movies.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'view-movie/:id', component: ViewMovieComponent },
  { path: 'movie-category/:id', component: MovieCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
