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
  constructor( private wp: WordpressService ) { }

  ngDoCheck() {
    this.posts = this.wp.getPostsFromService();
    console.log(this.posts);
  }

}
