import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './components/news.component';
import { NewsPage } from './pages/news.page';

@NgModule({
  imports: [RouterModule],
  declarations: [NewsComponent, NewsPage],
  exports: [NewsComponent, NewsPage],
})
export class NewsModule {}
