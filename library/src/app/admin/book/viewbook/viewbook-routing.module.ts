import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbookComponent } from './viewbook/viewbook.component';

const routes: Routes = [
  {
    path:'',component:ViewbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewbookRoutingModule { }
