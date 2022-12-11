import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NewsPageActions } from '../store/actions';
import { NewsSelectors } from '../store/selectors';

@Component({
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.css'],
  selector: 'news-page',
})
export class NewsPage implements OnInit {
  newsEntities$ = this.store.select(NewsSelectors.selectNewsEntities);

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    if (this.router.url) {
      //  this.store.dispatch(NewsPageActions.paramsChange());
    }
  }
}
