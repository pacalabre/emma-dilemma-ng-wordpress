import { Component } from '@angular/core';
import { WordpressService } from '../../wordpress-service.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent {
  posts = [];

  constructor(private wp: WordpressService) { }

  ngDoCheck() {
    this.posts = this.wp.getPostsFromService();
    console.log(this.posts);
  }

}
