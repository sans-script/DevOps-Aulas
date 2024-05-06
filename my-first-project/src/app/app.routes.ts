import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'dashboard',component:DashboardComponent}
];
