import { ToDo } from '../model/Todo.model';

export class ToDoState {
    ToDos: Array<ToDo>
    ToDoError: Error;
}

export const initializeState = (): ToDoState => {
    return { ToDos: Array<ToDo>(), ToDoError: null}
}