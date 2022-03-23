import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddbookRoutingModule } from './addbook-routing.module';
import { AddbookComponent } from './addbook/addbook.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddbookComponent
  ],
  imports: [
    CommonModule,
    AddbookRoutingModule,
    SharedModule
  ]
})
export class AddbookModule { }
