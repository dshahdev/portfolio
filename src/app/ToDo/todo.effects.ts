import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ToDoActions from './todo.action';
import { ToDo } from '../model/Todo.model';
import { GeneralData } from '../model/GeneralData.model';

@Injectable()
export class ToDoEffects {
    constructor(private sharedService: SharedService, private action$: Actions) {}

   GetToDos$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(ToDoActions.BeginGetToDoAction),
            mergeMap(action => 
                this.sharedService.getToDoList().pipe(
                    map((data: ToDo[]) => {
                        console.log(data);
                        return ToDoActions.SuccessGetToDoAction({payload: data})
                    }),
                    catchError((error:Error) => {
                        return of(ToDoActions.ErrorToDoAction(error))
                    })
                ))
        )
   );

   GetGeneralData$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(ToDoActions.BeginGetGeneralData),
            mergeMap(action => 
                this.sharedService.getGeneData().pipe(
                    map((data: GeneralData) => {
                        console.log(data);
                        return ToDoActions.SuccessGetGeneralData({payload: data})
                    }),
                    catchError((error: Error) =>{
                        return of(ToDoActions.ErrorToDoAction(error));
                    })
                ))
        )
   )
   
//    CreateToDo$: Observable<Action> = createEffect(()=>
//         this.action$.pipe(
//             ofType(ToDoActions.BeginCreateToDoAction),
//             mergeMap(action =>
//                 this.sharedService.)
//         )
//     )
}