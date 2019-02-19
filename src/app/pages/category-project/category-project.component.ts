import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../../wordpress-service.service';

@Component({
  selector: 'app-category-project',
  templateUrl: './category-project.component.html',
  styleUrls: ['./category-project.component.css']
})
export class CategoryProjectComponent implements OnInit {
  slugName="";
  posts = [];
  categoryPosts = [];

  constructor(private route: ActivatedRoute,private wp: WordpressService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(paramsAsMap => {
      this.slugName = this.route.snapshot.paramMap.get("category");
      console.log("slug = "+ this.slugName);
    })
    this.filterPostsByCategory();
  }

  ngDoCheck() {
    this.posts = this.wp.getPostsFromService();
    this.filterPostsByCategory();
  }

  filterPostsByCategory() {
    if(this.categoryPosts.length === 0) {
      this.posts.forEach(post => {
        let categoryName = post['_embedded']['wp:term'][0][0].slug;
        if(categoryName === this.slugName) {
          this.categoryPosts.push(post);
        };
      })
    }
      console.log(this.categoryPosts);
  }

}
