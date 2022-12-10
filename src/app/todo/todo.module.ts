import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToDoComponent } from './components/todo.component';
import { ToDoPage } from './pages/todo.page';

@NgModule({
  imports: [RouterModule],
  declarations: [ToDoComponent, ToDoPage],
  exports: [ToDoComponent, ToDoPage],
})
export class ToDoModule {}
