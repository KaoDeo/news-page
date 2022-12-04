import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NEWS_ROUTES } from './news/news.routing';

@NgModule({
  imports: [RouterModule.forRoot(NEWS_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
