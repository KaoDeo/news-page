import { NgModule } from '@angular/core';
import { NewsComponent } from './components/news.component';
import { NewsPage } from './pages/news.page';

@NgModule({
  imports: [],
  declarations: [NewsComponent, NewsPage],
  exports: [NewsComponent, NewsPage],
})
export class NewsModule {}
