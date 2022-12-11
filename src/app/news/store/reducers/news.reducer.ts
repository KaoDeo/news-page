import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { NewsApiActions } from '../actions';
import { NewsState } from '../state';
import { NewsItem } from '../types';

export const adapter: EntityAdapter<NewsItem> = createEntityAdapter<NewsItem>();

export const initialState: NewsState = adapter.getInitialState({
  loading: false,
});

export const newsReducer = createReducer(
  initialState,
  on(NewsApiActions.findNewsSuccess, (state, { payload }) => {
    return adapter.setAll(payload, {
      ...state,
      loading: false,
    });
  })
);
