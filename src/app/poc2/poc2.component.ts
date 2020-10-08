import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ToDo } from '../model/Todo.model';
import { Observable, Subscription } from 'rxjs';
import { ToDoState } from '../ToDo/todo.state';
import * as ToDoActions from '../ToDo/todo.action';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GeneralData } from '../model/GeneralData.model';

@Component({
  selector: 'app-poc2',
  templateUrl: './poc2.component.html',
  styleUrls: ['./poc2.component.css']
})
export class Poc2Component implements OnInit {
  todoList: ToDo[] = [];
  todo$: Observable<ToDoState>;
  ToDoSubscription: Subscription;

  // Title: string = "";
  // IsCompleted: boolean = false;
    websites: Array<string>
    artists: Array<string>
    bollywood: Array<string>
    hollywood: Array<string>

    generalDataList: GeneralData;
    displayData = [];
  todoError: Error = null;
  options = [];
  constructor(private sharedService: SharedService,
              private store: Store<{todos: ToDoState}>) { 
                this.todo$ = store.pipe(select('todos'));
              }
// Notes: data coming from the server via observable

  // ngOnInit(): void {
  //   this.sharedService.getGeneData().subscribe((response) => {
  //     console.log(JSON.stringify(response));
  //   })
  // }
  
//Notes:  state management(redux - code)
  // ngOnInit(): void {
  //   this.ToDoSubscription = this.todo$
  //   .pipe(
  //     map(x => {
  //       console.log("in todo$ pipe at this time..." + JSON.stringify(x));
  //       this.todoList = x.ToDos;
  //       console.log(this.todoList);
  //       this.todoError = x.ToDoError;
  //     })
  //   ).subscribe();
  //   this.store.dispatch(ToDoActions.BeginGetToDoAction());
  // }

    ngOnInit(): void {
      this.ToDoSubscription = this.todo$
        .pipe(
          map(x => {
            console.log("in todo$ pipe at this time..." + JSON.stringify(x));
            this.generalDataList = x.generalData;
            console.log("generalData: "+ this.generalDataList.websites);

            this.getSelection(this.generalDataList);
            this.todoError = x.ToDoError;
          })
        ).subscribe();

        this.store.dispatch(ToDoActions.BeginGetGeneralData());
    }

    getSelection(dataList: GeneralData) {
        for (var key in dataList) {
          // check if the property/key is defined in the object itself, not in parent
          if (dataList.hasOwnProperty(key)) {           
              console.log("general keys: " +key, dataList[key]);
              this.options.push(key);

          }
          
      }
      console.log("options: "+this.options);
    }

    changeEvent($event) {
      let text = $event.target.options[$event.target.options.selectedIndex].text;
      console.log(text);
        for (var key in this.generalDataList) {
          if ( key === text) {           
              console.log("general keys: " +key, this.generalDataList[key]);
              this.displayData = this.generalDataList[key];
              break;
          } else {
            console.log("na");
            this.displayData = null;
          }
          
        }
    }

  ngOnDestroy() {
    if(this.ToDoSubscription) {
      this.ToDoSubscription.unsubscribe();
    }
  }
  
  
}

