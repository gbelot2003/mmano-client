import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatTableModule,
  MatSelectModule,
  MatOptionModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './autenticacion/login/login.component';

import { DashboardComponent } from './autenticacion/dashboard/dashboard.component';
import { LogoutComponent } from './autenticacion/logout/logout.component';
import { UsuariosComponent } from './autenticacion/usuarios/usuarios.component';
import { RegisterComponent } from './autenticacion/register/register.component';
import { CompradoresComponent } from './autenticacion/register/compradores/compradores.component';

const modulosMaterial = [
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatTableModule,
  MatSelectModule,
  MatOptionModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    UsuariosComponent,
    RegisterComponent,
    CompradoresComponent
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
