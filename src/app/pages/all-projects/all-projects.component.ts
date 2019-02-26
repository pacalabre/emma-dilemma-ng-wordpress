import { Component } from '@angular/core';
import { WordpressService } from '../../wordpress-service.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent {
  posts=[];

  constructor(private wp: WordpressService) { }

  ngDoCheck() {
    this.posts = this.wp.getPostsFromService();
    console.log(this.posts);
  }

}
