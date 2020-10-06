import { Component, OnInit } from '@angular/core';
import { PocService } from './poc1.service';
import { Observable, forkJoin } from 'rxjs';
import { Item } from '../itemModel/item.model';
import { Items } from '../itemModel/items.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-poc1-list',
  templateUrl: './poc1-list.component.html',
  styleUrls: ['./poc1-list.component.css']
})
export class Poc1ListComponent implements OnInit {
  items: Array<Item>;

  constructor(private pocService: PocService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getMultipleData().subscribe((responseList) => {
      this.items = Items.fillForm(responseList[0].allProducts);
      this.items.forEach(e => {
        e.image_path = responseList[1].data[e.image_number].url;
      })
      console.log(this.items);
    })
  }

  public getMultipleData(): Observable<any[]> {
    // let dataResponse = this.pocService.getData();
    // let imageResponse = this.pocService.getImageData();
    let dataResponse = this.sharedService.getData();
    let imageResponse = this.sharedService.getImageData();

    return forkJoin(dataResponse, imageResponse);
  }

  
}
