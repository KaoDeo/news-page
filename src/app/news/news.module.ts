import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PipesModule } from '../shared';
import { NewsComponent } from './components/news.component';
import { NewsPage } from './pages/news.page';
import { NewsEffects } from './store/effects/news.effects';
import { newsReducer } from './store/reducers/news.reducer';

@NgModule({
  imports: [
    RouterModule,
    StoreModule.forFeature('news', newsReducer),
    EffectsModule.forFeature([NewsEffects]),
    PipesModule,
  ],
  declarations: [NewsComponent, NewsPage],
  exports: [NewsComponent, NewsPage],
})
export class NewsModule {}
