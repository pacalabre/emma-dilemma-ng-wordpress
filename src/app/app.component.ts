import { Component } from '@angular/core';
import { WordpressService } from './wordpress-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private wp: WordpressService) {
  
  }

  ngOnInit() {
    this.wp.getPosts();
  }

}


