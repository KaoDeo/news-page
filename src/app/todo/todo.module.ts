import { NgModule } from '@angular/core';
import { ToDoComponent } from './components/todo.component';
import { ToDoPage } from './pages/todo.page';

@NgModule({
  imports: [],
  declarations: [ToDoComponent, ToDoPage],
  exports: [ToDoComponent, ToDoPage],
})
export class ToDoModule {}
