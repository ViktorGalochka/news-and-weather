import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: any[];
  constructor(private http: HttpClient) {
    this.news = [];
    this.getCurrentNews();
  }
  getCurrentNews() {
    this.http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=0d9f464c57234f4baac7f64431d575ff").subscribe((data:any) => {
    // this.news.push(data.articles[2]);
    // this.news = data.articles;
    for(let a of data.articles) {
      this.news.push(a);
    }
  })
}  
getNews() {
  return this.news;
}
}
