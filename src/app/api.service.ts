import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'ddc947e8b1e14a2e89dd8c826d83bfa3';

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ddc947e8b1e14a2e89dd8c826d83bfa3');
  }
}
