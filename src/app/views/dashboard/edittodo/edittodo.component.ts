import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from './../../../services/todo.service/todo.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  EditTodoForm: FormGroup;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      if (params.id) {
        this.todoService.getTodo(params.id)
        .subscribe((data: any) => {
            this.EditTodoForm = new FormGroup({
              'title': new FormControl(data.todo.title, Validators.required),
              'text': new FormControl(data.todo.text, Validators.required),
            });
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  onSubmit() {
    if (this.EditTodoForm.valid) {
     this.editTodo();
    }
  }

  editTodo() {
    this.todoService.addTodo(this.EditTodoForm.value)
    .subscribe((data: any) => {
      this.router.navigateByUrl('/todos');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
