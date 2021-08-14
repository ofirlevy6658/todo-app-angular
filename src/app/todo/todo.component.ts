import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() task: Task;
  @Output() taskEmitter = new EventEmitter<Task>();
  @Output() taskDone = new EventEmitter<Task>();
  completed: boolean;
  constructor() {}
  deleteTask(task: Task) {
    this.taskEmitter.emit(task);
  }
  taskState(task: Task) {
    this.taskDone.emit(task);
  }
  ngOnInit(): void {}
}
