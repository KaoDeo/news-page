import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NewsService } from '../services';

@Injectable()
export class NewsEffects {
  constructor(
    private service: NewsService,
    private actions$: Actions,
    private router: Router,
    private store: Store
  ) {}
}
