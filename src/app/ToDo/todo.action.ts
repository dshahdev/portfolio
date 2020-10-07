
import { createAction, props } from '@ngrx/store';
import { ToDo } from '../model/Todo.model';

// note: to use Redux -- install @ngrx/store --save
//                    -- install @ngrx/effects --save

// getting todoList action
export const GetToDoAction = createAction('[ ToDo] -Get ToDo');

export const BeginGetToDoAction = createAction('[ ToDo ] - Begin Get Todo');

export const SuccessGetToDoAction = createAction(' [ToDo ] - Success Get Todo',
    props<{ payload: ToDo[]}>()
);

// create new Todo action

export const CreateToDoAction = createAction ('[ ToDo ] - Create ToDo');

export const BeginCreateToDoAction = createAction('[ ToDo ] - Begin Create ToDo');

export const SuccessCreateToDoAction = createAction('[ ToDo ] - Success Create ToDo');

// getting errors

export const ErrorToDoAction = createAction('[ ToDo ] - Error', props<Error>());