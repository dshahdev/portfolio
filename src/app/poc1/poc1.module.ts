import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Poc1ListComponent } from './poc1-list.component';
import { Poc1DetailComponent } from './poc1-detail.component';
import { Poc1ViewComponent } from './poc1-view.component';

@NgModule({
    declarations: [
        Poc1ListComponent,
        Poc1ViewComponent,
        Poc1DetailComponent
        
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: 'poc1', component: Poc1ListComponent },
        { path: 'poc1/:id', component: Poc1DetailComponent }
      ])
    ]
  })
  export class PocOneModule { }
  