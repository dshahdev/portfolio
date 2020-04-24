import { Component, OnInit } from '@angular/core';
import { PocService } from './poc1.service';

@Component({
  selector: 'app-poc1',
  templateUrl: './poc1.component.html',
  styleUrls: ['./poc1.component.css']
})
export class Poc1Component implements OnInit {

  constructor(private pocService: PocService) { }

  ngOnInit(): void {
   
  }

}
