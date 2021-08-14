import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  tasks: Task[] = [
    {
      complete: false,
      context: 'take dog out',
      id: '3124d21',
    },
    {
      complete: false,
      context: 'buy pizza',
      id: '3124ds21',
    },
    {
      complete: true,
      context: 'eat food',
      id: '3124dd21',
    },
  ];
  addTaskForm = false;
  text = '';

  addTask() {
    this.addTaskForm = !this.addTaskForm;
    if (!this.text) return;
    if (!this.addTaskForm)
      this.tasks.push({
        complete: false,
        context: this.text,
        id: '' + Math.random() * 32100321,
      });
    this.text = '';
  }
  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((el) => task.id !== el.id);
  }
  taskDone(task: Task) {
    this.tasks = this.tasks.map((el) => {
      if (task.id === el.id) {
        el.complete = !el.complete;
        return el;
      } else return el;
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
