import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsefulComponent } from './pages/useful/useful.component';
import { FanficComponent } from './pages/fanfic/fanfic.component';

export const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'useful', component: UsefulComponent, pathMatch:"full" },
  { path:'fanfic', component: FanficComponent, pathMatch:"full" },
  { path: "**", redirectTo: "/"}
];
