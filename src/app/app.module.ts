import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AnalyticsComponent } from './analytics/formsubmit/analytics.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing'
import { ContactComponent } from './contact/contact.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { HomeComponent } from './home/home.component';
import { DropdownComponent} from './analytics/dropdown/dropdown.component'

@NgModule({
   declarations: [
      AppComponent,
      AnalyticsComponent,
      NavComponent,
      ContactComponent,
      SubmittedComponent,
      HomeComponent,
      DropdownComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
