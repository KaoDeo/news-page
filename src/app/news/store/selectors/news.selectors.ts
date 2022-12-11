import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, NewsState } from '../state';

export const selectNewsState = createFeatureSelector<NewsState>('news');

const { selectAll: subscriptionsEntitiesSelectAll } = adapter.getSelectors();

export const selectNewsEntities = createSelector(
  selectNewsState,
  subscriptionsEntitiesSelectAll
);
