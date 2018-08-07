import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo.service/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  completedTodos = [];
  uncompletedTodos = [];
  date = new Date;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getAllTodos()
      .subscribe((data: any) => {
          this.completedTodos = [];
          this.uncompletedTodos = [];
          data.todos.forEach(todo => {
            if (todo.completed) {
              this.completedTodos.push(todo);
            } else {
              this.uncompletedTodos.push(todo);
            }
          });
        },
        (err) => {
          console.log(err);
      });
  }

  editTodo(id) {
    console.log(`edit todo ${id}`);
  }

  removeTodo(id) {
    this.todoService.removeTodo(id)
    .subscribe(() => {
      this.getTodos();
    },
    err => {
      console.log(err);
    });
  }

  completeTodo(id, completed) {
    this.todoService.editTodo(id, {completed})
    .subscribe(() => {
      this.getTodos();
    },
    err => {
      console.log(err);
    });
  }

  getDate(timestamp) {
    return new Date(timestamp);
  }
}
