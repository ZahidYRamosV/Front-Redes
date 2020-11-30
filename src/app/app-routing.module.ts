import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NvarComponent } from './nvar/nvar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

{ path : '',redirectTo:'login',pathMatch:'full' },
  { path : 'login' ,component : LoginComponent },
  { path : 'nvar' ,component : NvarComponent },
  { path : 'inicio' ,component : InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
