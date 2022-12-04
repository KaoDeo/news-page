import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.css'],
  selector: 'news-page',
})
export class NewsPage implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
