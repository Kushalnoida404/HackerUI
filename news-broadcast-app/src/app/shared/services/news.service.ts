import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../model/news.model';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class NewsService {
    private apiUrl = environment.apiBaseUrl;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
    };
  
    constructor(private http: HttpClient) { }
  
    getNews(): Observable<News[]> {
        const url = `${this.apiUrl}/news`;
        return this.http.get<News[]>(url, this.httpOptions);
    };
}