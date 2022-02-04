import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getMovie():Observable <any> {
    return this.httpClient.get<any>(`${this.apiUrl}/discover/movie?api_key=c145995d15853bf7b8891db5c10635a8`);
  }

  getTrailers(id: number):Observable <any> {
    return this.httpClient.get<any>(`${this.apiUrl}/movie/${id}/videos?api_key=c145995d15853bf7b8891db5c10635a8&language=en-US`);
  }

  getDetail(id: number):Observable <any> {
    return this.httpClient.get(`${this.apiUrl}/movie/${id}?api_key=c145995d15853bf7b8891db5c10635a8&language=en-US`);
  }

  getMovieList():Observable <any> {
    return this.httpClient.get<any>(`${this.apiUrl}/genre/movie/list?api_key=c145995d15853bf7b8891db5c10635a8&language=en-US`);
  }

  getMovieCategory(id: number):Observable <any> {
    return this.httpClient.get<any>(`${this.apiUrl}/discover/movie?sort_by=popularity.desc&api_key=c145995d15853bf7b8891db5c10635a8&with_genres=${id}`);
  }

}
