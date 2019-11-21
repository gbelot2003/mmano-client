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
  MatDatepickerModule,
  MatNativeDateModule,
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
import { TransportistaComponent } from './autenticacion/register/transportista/transportista.component';
import { ProductorIndividualComponent } from './autenticacion/register/productor-individual/productor-individual.component';
import { ProductorGrupalComponent } from './autenticacion/register/productor-grupal/productor-grupal.component';
import { ProductorRepresentanteComponent } from './autenticacion/register/productor-representante/productor-representante.component';
import { PromotorComponent } from './autenticacion/register/promotor/promotor.component';
import { AdministradorSistemaComponent } from './autenticacion/register/administrador-sistema/administrador-sistema.component';
import { AdministradorMantenimientoComponent } from './autenticacion/register/administrador-mantenimiento/administrador-mantenimiento.component';
import { VerificadorComponent } from './autenticacion/register/verificador/verificador.component';
import { GerenteComponent } from './autenticacion/register/gerente/gerente.component';

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
  MatDatepickerModule,
  MatNativeDateModule
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
    CompradoresComponent,
    TransportistaComponent,
    ProductorIndividualComponent,
    ProductorGrupalComponent,
    ProductorRepresentanteComponent,
    PromotorComponent,
    AdministradorSistemaComponent,
    AdministradorMantenimientoComponent,
    VerificadorComponent,
    GerenteComponent
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
