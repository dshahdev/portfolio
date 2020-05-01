import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poc1-detail',
  templateUrl: './poc1-detail.component.html',
  styleUrls: ['./poc1-detail.component.css']
})
export class Poc1DetailComponent implements OnInit {
  item: any;

  constructor(private router: Router) {

    if (typeof this.router.getCurrentNavigation().extras.state.Item != 'undefined'
        && this.router.getCurrentNavigation().extras.state.Item) {
      this.item = this.router.getCurrentNavigation().extras.state.Item;
    }

   }

  ngOnInit(): void {
  }

}
