import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Album } from '../album';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }

  url: string = "https://jsonplaceholder.typicode.com/albums";
  getAlbums(): Observable<Album[]>{
    return this.httpclient.get<Album[]>(this.url);
  }
}
