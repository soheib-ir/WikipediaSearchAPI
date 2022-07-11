import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  term: string = '';
  @Output() onSearch = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onChangeText(event: any): void {
    this.term = event.target.value;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.onSearch.emit(this.term);
  }
}
