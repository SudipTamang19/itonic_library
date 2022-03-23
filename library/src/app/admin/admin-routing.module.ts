import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'',component:AdminComponent,
    children:[
      {
        path:'dashboard',
        loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
      {
        path:'user',
        loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
      },
      {
        path:'book',
        loadChildren:()=>import('./book/book.module').then(m=>m.BookModule)
      },
      {
        path:'inventory',
        loadChildren:()=>import('./inventory/inventory.module').then(m=>m.InventoryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
