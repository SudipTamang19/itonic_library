import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SlidersComponent } from './layout/sliders/sliders.component';


@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    SlidersComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  exports:[
    SlidersComponent,
    HeaderComponent,
    LandingComponent
  ]
})
export class LandingModule { }
