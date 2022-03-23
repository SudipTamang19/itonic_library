import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewuserRoutingModule } from './viewuser-routing.module';
import { ViewuserComponent } from './viewuser/viewuser.component';


@NgModule({
  declarations: [
    ViewuserComponent
  ],
  imports: [
    CommonModule,
    ViewuserRoutingModule
  ]
})
export class ViewuserModule { }
