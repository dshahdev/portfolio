import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../itemModel/item.model';

@Component({
  selector: 'app-poc1-view',
  templateUrl: './poc1-view.component.html',
  styleUrls: ['./poc1-view.component.css']
})
export class Poc1ViewComponent implements OnInit {

  @Input() itemData: Item;
  
  constructor() { }

  ngOnInit(): void {
  }

}
