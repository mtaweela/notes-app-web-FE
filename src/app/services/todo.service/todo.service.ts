import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class TodoService {
  private todosUrl = environment.apiUrl + '/todos';

  constructor(
    private http: HttpClient,
  ) { }

  addTodo(todoData) {
    // const headers = new HttpHeaders({ 'x-auth': localStorage.getItem('id_token')});
    return this.http.post<any>( this.todosUrl, todoData);
  }

  getTodo(todoId) {
    // const headers = new HttpHeaders({ 'x-auth': localStorage.getItem('id_token')});
    return this.http.get<any>(
      this.todosUrl
    );
  }

  getAllTodos() {
    // const headers = new HttpHeaders({ 'x-auth': localStorage.getItem('id_token')});
    return this.http.get<any>(this.todosUrl);
  }

  removeTodo(todoId) {
    // const headers = new HttpHeaders({ 'x-auth': localStorage.getItem('id_token')});
    return this.http.delete<any>(this.todosUrl + '/' + todoId);
  }

  editTodo(todoId, todoData) {
    // const headers = new HttpHeaders({ 'x-auth': localStorage.getItem('id_token')});
    return this.http.put<any>(
      this.todosUrl + '/' + todoId,
      todoData
    );
  }
}
