import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',redirectTo:'adduser',pathMatch:'full'
  },
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:"adduser",loadChildren:()=>import('./adduser/adduser.module').then(m=>m.AdduserModule)
      },
      {
        path:'viewuser',loadChildren:()=>import('./viewuser/viewuser.module').then(m=>m.ViewuserModule)
      },
      {
        path:'edituser/:id',loadChildren:()=>import('./edituser/edituser.module').then(m=>m.EdituserModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
