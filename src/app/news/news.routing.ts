import { Route } from '@angular/router';
import { NewsPage } from './pages/news.page';

export const NEWS_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full',
  },
  {
    path: 'news',
    component: NewsPage,
  },
];
