import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
        LoginRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule
  ]
})
export class LoginModule { }
