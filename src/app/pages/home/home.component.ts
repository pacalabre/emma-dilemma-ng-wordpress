import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
import { WordpressService } from '../../wordpress-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts=[];
  featuredPosts=[];
  constructor( private wp: WordpressService ) { }

  ngDoCheck() {
    this.posts = this.wp.getPostsFromService();
    console.log(this.posts);
    this.posts.forEach(post => {
      // need to find a way to grab the featured slug only if it exists
      let homePost = post['_embedded']['wp:term'][0][1].slug;
      if( post['_embedded']['wp:term'][0].length > 1 && homePost === 'featured') {
        this.featuredPosts.push(post);
      };
    })
    console.log(this.featuredPosts);
  }

}
