import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  selector: 'news-component',
})
export class NewsComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
