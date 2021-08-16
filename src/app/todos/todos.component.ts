import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../task';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  tasks: Task[];
  addTaskForm = false;
  text = '';
  data: any;
  addTask() {
    this.addTaskForm = !this.addTaskForm;
    if (!this.text) return;
    this.http
      .post<any>('http://localhost:3000/tasks', { context: this.text })
      .subscribe((data) => {
        this.tasks = data;
      });
    // if (!this.addTaskForm)
    //   this.tasks.push({
    //     complete: false,
    //     context: this.text,
    //     id: '' + Math.random() * 32100321,
    //   });
    this.text = '';
  }
  deleteTask(task: Task) {
    // this.tasks = this.tasks.filter((el) => task.id !== el.id);
    this.http
      .put<any>('http://localhost:3000/tasks', { id: task.id })
      .subscribe((data) => {
        this.tasks = data;
      });
  }

  taskDone(task: Task) {
    this.tasks = this.tasks.map((el) => {
      if (task.id === el.id) {
        el.complete = !el.complete;
        return el;
      } else return el;
    });
  }
  taskEdit(task: Task) {
    console.log(task);
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/tasks').subscribe((data) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }
}
