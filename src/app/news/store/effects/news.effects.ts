import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs';
import { NewsApiActions, NewsPageActions } from '../actions';
import { NewsService } from '../services';

@Injectable()
export class NewsEffects {
  findNews$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsPageActions.paramsChange),
      concatMap(() => {
        return this.service.getNews().pipe(
          map((res) => {
            return NewsApiActions.findNewsSuccess({
              payload: res,
            });
          })
        );
      })
    );
  });
  constructor(
    private service: NewsService,
    private actions$: Actions,
    private router: Router,
    private store: Store
  ) {}
}
