import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WordpressService {

  posts=[];

  constructor(private http: HttpClient) { }
  getPosts() {
    this.http.get<any[]>('https://public-api.wordpress.com/wp/v2/sites/theemmadilemma731021034.wordpress.com/posts?_embed', {
            params: {
                per_page: '100'
            }
        })
		.subscribe(response => {
			this.posts = response;
			return this.posts;
		})
  }

  getPostsFromService() {
    return this.posts;
  }

}
