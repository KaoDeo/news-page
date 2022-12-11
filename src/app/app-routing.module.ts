import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { NewsPage } from './news/pages/news.page';
import { ToDoPage } from './todo/pages/todo.page';

const routes: Routes = [
  // when user goes to /my-app/ url, it will be redirected to /my-app/home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news-page', component: NewsPage },
  { path: 'todo-page', component: ToDoPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
