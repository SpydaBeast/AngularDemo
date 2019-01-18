import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component'
import { AnalyticsComponent } from './analytics/formsubmit/analytics.component'
import { ModuleWithProviders } from '@angular/core';
import { SubmittedComponent } from './submitted/submitted.component';
import { HomeComponent } from './home/home.component';
import { DropdownComponent} from './analytics/dropdown/dropdown.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'ga', component: AnalyticsComponent},
  { path: 'email', component: ContactComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'submitted', component: SubmittedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);