import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsModule } from './news';
import { ToDoModule } from './todo';
import { HomeModule } from './home';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
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
