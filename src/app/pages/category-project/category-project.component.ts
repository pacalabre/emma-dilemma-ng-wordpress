import { Component } from '@angular/core';
import { WordpressService } from '../../wordpress-service.service';

@Component({
  selector: 'app-category-project',
  templateUrl: './category-project.component.html',
  styleUrls: ['./category-project.component.css']
})
export class CategoryProjectComponent {
  posts = [];

  constructor(private wp: WordpressService) { }

  ngDoCheck() {
    this.posts = this.wp.getPostsFromService();
    console.log(this.posts);
  }

}
