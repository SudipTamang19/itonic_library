import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path:'',redirectTo:'addbook',pathMatch:'full'
  },
  {
    path:'',component:BookComponent,
    children:[
      {
        path:'addbook',
        loadChildren:()=>import('./addbook/addbook.module').then(m=>m.AddbookModule)
      },
      {
        path:'viewbook',
        loadChildren:()=>import('./viewbook/viewbook.module').then(m=>m.ViewbookModule)
      },
      {
        path:'editbook/:id',
        loadChildren:()=>import('./editbook/editbook.module').then(m=>m.EditbookModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
