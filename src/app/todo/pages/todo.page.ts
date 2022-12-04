import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.css'],
  selector: 'todo-page',
})
export class ToDoPage implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
