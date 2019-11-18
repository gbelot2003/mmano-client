import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule,
  MatInputModule, MatButtonModule, MatCardModule, MatCheckboxModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './autenticacion/dashboard/dashboard.component';
import { LogoutComponent } from './autenticacion/logout/logout.component';

const modulosMaterial = [
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...modulosMaterial,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
