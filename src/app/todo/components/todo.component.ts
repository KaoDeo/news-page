import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  selector: 'todo-component',
})
export class ToDoComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
