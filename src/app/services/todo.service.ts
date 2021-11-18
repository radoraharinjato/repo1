import { Injectable } from '@angular/core';
import {Cv} from "../components/cv/model/cv";
import {Todo} from "./model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
    this.todoList=this.getList();
  }

  private todoList : Todo[] = [];

  logger(){
        console.log(this.todoList);
  }

  add(todo: Todo) {
    this.todoList.push(todo);
  }

  getList() {
    return this.todoList;
  }

  delete(todo:Todo) {
    const index: number = this.todoList.indexOf(todo);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }

}
