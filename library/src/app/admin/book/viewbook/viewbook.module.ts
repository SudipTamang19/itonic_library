import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewbookRoutingModule } from './viewbook-routing.module';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewbookComponent
  ],
  imports: [
    CommonModule,
    ViewbookRoutingModule,
    SharedModule
  ]
})
export class ViewbookModule { }
