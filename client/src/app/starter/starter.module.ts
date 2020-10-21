import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StarterComponent } from './starter.component';
import { OneHaltMaterialModule } from '../material-module';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, StarterComponent],
  imports: [
    CommonModule,
    StarterRoutingModule,
    OneHaltMaterialModule
  ]
})
export class StarterModule { }
