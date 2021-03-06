import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatGridListModule,
  MatSnackBarModule,
  MatListModule, MatDialogModule, MatTab, MatTabsModule,
} from '@angular/material';
import { MatDialog } from '@angular/material/dialog';

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
import { SnackBarComponentComponent } from './misc/snack-bar-component/snack-bar-component.component';
import { ProductorIndividualDashComponent } from './autenticacion/dashboard/productor-individual-dash/productor-individual-dash.component';
import { ProductorGrupalDashComponent } from './autenticacion/dashboard/productor-grupal-dash/productor-grupal-dash.component';
import { ProductorRepesentanteDashComponent } from './autenticacion/dashboard/productor-repesentante-dash/productor-repesentante-dash.component';
import { CompradorDashComponent } from './autenticacion/dashboard/comprador-dash/comprador-dash.component';
import { TransportistaDashComponent } from './autenticacion/dashboard/transportista-dash/transportista-dash.component';
import { PromotorDashComponent } from './autenticacion/dashboard/promotor-dash/promotor-dash.component';
import { AdminSistemaDashComponent } from './autenticacion/dashboard/admin-sistema-dash/admin-sistema-dash.component';
import { AdminMantenimientoDashComponent } from './autenticacion/dashboard/admin-mantenimiento-dash/admin-mantenimiento-dash.component';
import { VerificadorDashComponent } from './autenticacion/dashboard/verificador-dash/verificador-dash.component';
import { GerenteDashComponent } from './autenticacion/dashboard/gerente-dash/gerente-dash.component';
import { ConfiguracionUsuarioComponent } from './autenticacion/configuracion-usuario/configuracion-usuario.component';
import { StorageModule } from '@ngx-pwa/local-storage';
import { UsuariosEditComponent } from './autenticacion/usuarios/usuarios-edit/usuarios-edit.component';
import { AdministradorSistemaFormComponent } from './autenticacion/usuarios/administrador-sistema-form/administrador-sistema-form.component';
import { CompradorFormComponent } from './autenticacion/usuarios/comprador-form/comprador-form.component';
import { ProductorIndependienteFormComponent } from './autenticacion/usuarios/productor-independiente-form/productor-independiente-form.component';
import { ProductorGrupalFormComponent } from './autenticacion/usuarios/productor-grupal-form/productor-grupal-form.component';
import { ProductorRepresentanteFormComponent } from './autenticacion/usuarios/productor-representante-form/productor-representante-form.component';
import { TransportistaFormComponent } from './autenticacion/usuarios/transportista-form/transportista-form.component';
import { AdministradorMantenimientoFormComponent } from './autenticacion/usuarios/administrador-mantenimiento-form/administrador-mantenimiento-form.component';
import { PromotorFormComponent } from './autenticacion/usuarios/promotor-form/promotor-form.component';
import { VerificadorFormComponent } from './autenticacion/usuarios/verificador-form/verificador-form.component';
import { GerenteFormComponent } from './autenticacion/usuarios/gerente-form/gerente-form.component';
import { PasswordRequireComponent } from './autenticacion/dashboard/password-require/password-require.component';
import { ConfiguracionesComponent } from './autenticacion/configuraciones/configuraciones.component';
import { AuditComponent } from './autenticacion/audit/audit.component';
import { GruposComponent } from './autenticacion/grupos/grupos.component';

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
  MatNativeDateModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatGridListModule,
  MatSnackBarModule,
  MatListModule,
  MatDialogModule,
  MatTabsModule,
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
    GerenteComponent,
    SnackBarComponentComponent,
    ProductorIndividualDashComponent,
    ProductorGrupalDashComponent,
    ProductorRepesentanteDashComponent,
    CompradorDashComponent,
    TransportistaDashComponent,
    PromotorDashComponent,
    AdminSistemaDashComponent,
    AdminMantenimientoDashComponent,
    VerificadorDashComponent,
    GerenteDashComponent,
    ConfiguracionUsuarioComponent,
    UsuariosEditComponent,
    AdministradorSistemaFormComponent,
    CompradorFormComponent,
    ProductorIndependienteFormComponent,
    ProductorGrupalFormComponent,
    ProductorRepresentanteFormComponent,
    TransportistaFormComponent,
    AdministradorMantenimientoFormComponent,
    PromotorFormComponent,
    VerificadorFormComponent,
    GerenteFormComponent,
    PasswordRequireComponent,
    ConfiguracionesComponent,
    AuditComponent,
    GruposComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...modulosMaterial,
    StorageModule.forRoot({ IDBNoWrap: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
