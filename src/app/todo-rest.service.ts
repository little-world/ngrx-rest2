import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoRestService {

  constructor(public http: HttpClient) { }

  load() {
    return this.http.get<Todo[]>('http://localhost:8080/todo')
  }

  add(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:8080/todo', todo)
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/todo/' + id)
  }
}

