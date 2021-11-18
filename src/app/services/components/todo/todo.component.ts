import { Component, OnInit } from '@angular/core';
import {Todo} from "../../model/todo";
import {TodoService} from "../../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private todoService:TodoService
  ) { }

  nameToAdd:string|undefined;
  contentToAdd:string|undefined;

  public todoList:Todo[] = [];

  ngOnInit(): void {
    this.todoList = this.todoService.getList();
  }

  addTodo() {
    let t = new Todo(this.nameToAdd, this.contentToAdd);
    this.todoService.add(t);
    this.todoService.logger();
    this.nameToAdd='';
    this.contentToAdd='';
  }

  deleteTodo(todo:Todo){
    this.todoService.delete(todo);
  }
}
