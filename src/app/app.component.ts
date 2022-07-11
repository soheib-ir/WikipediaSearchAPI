import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WikipediaService]
})
export class AppComponent {
  posts = [];

  constructor(private wikipediaService: WikipediaService) { }
  
  onGetTermSearch(term: string): void {
    this.wikipediaService.onSearch(term).subscribe((response) => {
      this.posts = response.query.search;
    });
  }
}
