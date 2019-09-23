import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [
    AuthRoutingModule,
  ]
})
export class AuthModule { }
