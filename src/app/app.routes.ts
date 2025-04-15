// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component'; // update the path if different
import { HomeComponent } from './pages/home/home.component'; // update the path if different
export const routes: Routes = [
  { path: '', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent }
  // Add more routes as needed
];
