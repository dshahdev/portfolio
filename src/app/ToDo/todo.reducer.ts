import { Action, on, createReducer, State } from '@ngrx/store';
import { ToDoState, initializeState } from './todo.state';
import * as ToDoActions from './todo.action';
import { ToDo } from '../model/Todo.model';

const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(ToDoActions.GetToDoAction,(state)=>{
        return {...state, ToDo: [...state.ToDos], ToDoError: null}
    }),
    on(ToDoActions.SuccessGetToDoAction, (state:ToDoState, {payload}) =>{
        console.log("SuccessGetToDoAction");
        console.log(payload);
        console.log("SuccessGetToDoAction");
        return {...state, ToDos: payload, ToDoError: null}
    }),
    on(ToDoActions.ErrorToDoAction, (state: ToDoState, error: Error) => {
        console.log(error);
        return { ...state, ToDoError:error}
    }),
    on(ToDoActions.GetGeneralData, (state) => {
        return {...state, generalData: state.generalData, ToDoError: null}
    }),
    on(ToDoActions.SuccessGetGeneralData, (state: ToDoState, {payload}) => {
        console.log("SuccessGetGeneralData");
        console.log(payload);
        console.log("SuccessGetGeneralData");
        return {...state, generalData: payload, ToDoError: null};
    })

)

export function ToDoReducer(
    state: ToDoState | undefined,
    action: Action
): ToDoState {
    return reducer(state, action);
}