import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [HomeComponent, SignupComponent, LoginComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
