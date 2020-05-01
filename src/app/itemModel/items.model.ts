import { Item } from './item.model';
import { isArray } from 'util';

export class Items {

    constructor(){}
    static fillForm(obj: any): Array<Item> {
        let data: Array<Item> = new Array<Item>();
        if(!isArray(obj)) {
            return data;
        }
        for(var i = 0; i < obj.length; i++) {
            data.push(new Item(obj[i]));
        }

        return data;

    }
}