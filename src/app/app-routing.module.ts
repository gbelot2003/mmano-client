import { UsersGuard } from './guards/users.guard';
import { UsuariosComponent } from './autenticacion/usuarios/usuarios.component';
import { LogoutComponent } from './autenticacion/logout/logout.component';
import { DashboardComponent } from './autenticacion/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { AuthGuard } from './autenticacion/auth.guard';
import { RegisterComponent } from './autenticacion/register/register.component';
import { ConfiguracionUsuarioComponent } from "./autenticacion/configuracion-usuario/configuracion-usuario.component";
import {GuessGuard} from "./guards/guess.guard";
import {UsuariosEditComponent} from "./autenticacion/usuarios/usuarios-edit/usuarios-edit.component";

const routes: Routes = [
  {path: '', component:HomeComponent, canActivate:[GuessGuard]},
  {path: 'login', component:LoginComponent, canActivate:[GuessGuard]},
  {path: 'register', component:RegisterComponent, canActivate:[GuessGuard]},
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path: 'listado-usuarios', component:UsuariosComponent, canActivate:[AuthGuard, UsersGuard]},
  {path: 'listado-usuarios/:id', component:UsuariosEditComponent, canActivate:[AuthGuard, UsersGuard]},
  {path: 'configuraciones-usuarios', component:ConfiguracionUsuarioComponent, canActivate:[AuthGuard]},
  {path: 'logout', component:LogoutComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
