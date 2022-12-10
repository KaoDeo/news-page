import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsModule } from './news';
import { ToDoModule } from './todo';
import { HomeModule } from './home';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NewsModule,
    ToDoModule,
    HomeModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
