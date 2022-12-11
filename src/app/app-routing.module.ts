import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

//? Without lazy loading, all three components (HomeComponent, UsersComponent, and ProductsComponent) would be loaded when the application is initialized, even if the user never navigates to the users or products routes.
//* const routes: Routes = [
//*   { path: 'home', component: HomeComponent },
//*   { path: 'users', component: UsersComponent },
//*   { path: 'products', component: ProductsComponent }
//* ];

//? lazy loading
const routes: Routes = [
  //? when user goes to /my-app/ url, it will be redirected to /my-app/home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'news-page',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'todo-page',
    loadChildren: () => import('./todo/todo.module').then((m) => m.ToDoModule),
  },
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
