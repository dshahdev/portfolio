import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ToDo } from '../model/Todo.model';
import { Observable, Subscription } from 'rxjs';
import { ToDoState } from '../ToDo/todo.state';
import * as ToDoActions from '../ToDo/todo.action';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-poc2',
  templateUrl: './poc2.component.html',
  styleUrls: ['./poc2.component.css']
})
export class Poc2Component implements OnInit {
  todoList: ToDo[] = [];
  todo$: Observable<ToDoState>;
  ToDoSubscription: Subscription;

  Title: string = "";
  IsCompleted: boolean = false;

  todoError: Error = null;

  constructor(private sharedService: SharedService,
              private store: Store<{todos: ToDoState}>) { 
                this.todo$ = store.pipe(select('todos'));
              }
// Notes: data coming from the server via observable

  // ngOnInit(): void {
  //   this.sharedService.getToDoList().subscribe((response) => {
  //     console.log(JSON.stringify(response));
  //   })
  // }
  
//Notes:  state management(redux - code)
  ngOnInit(): void {
    this.ToDoSubscription = this.todo$
    .pipe(
      map(x => {
        console.log("in todo$ pipe at this time..." + JSON.stringify(x));
        this.todoList = x.ToDos;
        console.log(this.todoList);
        this.todoError = x.ToDoError;
      })
    ).subscribe();
    this.store.dispatch(ToDoActions.BeginGetToDoAction());
  }

  ngOnDestroy() {
    if(this.ToDoSubscription) {
      this.ToDoSubscription.unsubscribe();
    }
  }
  createToDos() {
    
  }
  
}

