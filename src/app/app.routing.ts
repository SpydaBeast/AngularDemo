import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component'
import { AnalyticsComponent } from './analytics/analytics.component'
import { ModuleWithProviders } from '@angular/core';
import { SubmittedComponent } from './submitted/submitted.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'ga', component: AnalyticsComponent},
  { path: 'email', component: ContactComponent },
  { path: 'submitted', component: SubmittedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);