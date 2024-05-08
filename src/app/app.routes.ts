import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './singup/singup.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'', component:LoginComponent
    },{
        path:'singup', component:SingupComponent
    },{
        path:'home', component:HomeComponent
    }
];
