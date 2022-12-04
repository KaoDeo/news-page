import { Route } from '@angular/router';
import { ToDoPage } from './pages/todo.page';

export const TODO_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    component: ToDoPage,
  },
];
