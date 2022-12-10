import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';
import { NewsState } from '../state';
import { NewsItem } from '../types';

export const adapter: EntityAdapter<NewsItem> = createEntityAdapter<NewsItem>();

export const initialState: NewsState = adapter.getInitialState({
  loading: false,
});

export const newsReducer = createReducer(initialState);
