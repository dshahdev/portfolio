import { ToDo } from '../model/Todo.model';
import { GeneralData } from '../model/GeneralData.model';

export class ToDoState {
    ToDos: Array<ToDo>
    generalData: GeneralData
    ToDoError: Error;
}

export const initializeState = (): ToDoState => {
    return { ToDos: Array<ToDo>(), generalData: new GeneralData, ToDoError: null}
}