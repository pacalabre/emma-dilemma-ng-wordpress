import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../../wordpress-service.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent {
  posts = [];
  slugName = "";
  categoryName = "";
  projectTitle;
  projectText;
  projectImg;

  constructor(private route: ActivatedRoute, private wp: WordpressService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(paramsAsMap => {
      this.slugName = this.route.snapshot.paramMap.get("id");
      this.categoryName = this.route.snapshot.paramMap.get("category");
    })
  }

  ngDoCheck() {
    this.showPost();
    console.log(this.posts);
  }

  showPost() {
    this.posts = this.wp.getPostsFromService();
    this.posts.forEach(post => {
      if(post.slug === this.slugName) {       
        this.projectTitle = post.title.rendered;
        this.projectText = post.content.rendered;
        this.projectImg = post._embedded["wp:featuredmedia"][0].source_url;
      }
    })
  }

}
