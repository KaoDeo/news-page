import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { NewsItem } from '../types';

export interface NewsState extends EntityState<NewsItem> {
  loading: boolean;
}

export const adapter: EntityAdapter<NewsItem> = createEntityAdapter<NewsItem>();
