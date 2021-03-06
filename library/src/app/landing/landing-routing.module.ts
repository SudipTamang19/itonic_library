import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path:'home',component:LandingComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
