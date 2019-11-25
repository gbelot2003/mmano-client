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

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path: 'usuarios', component:UsuariosComponent, canActivate:[AuthGuard, UsersGuard]},
  {path: 'configuraciones-usuarios', component:ConfiguracionUsuarioComponent, canActivate:[AuthGuard]},
  {path: 'logout', component:LogoutComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
