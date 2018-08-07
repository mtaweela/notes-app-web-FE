import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from './../../../services/todo.service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  AddTodoForm: FormGroup;
  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.AddTodoForm = new FormGroup({
      'title': new FormControl(null , Validators.required),
      'text': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.AddTodoForm.valid) {
     this.addTodo();
    }
  }

  addTodo() {
    this.todoService.addTodo(this.AddTodoForm.value)
    .subscribe((data: any) => {
      this.router.navigateByUrl('/todos');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
