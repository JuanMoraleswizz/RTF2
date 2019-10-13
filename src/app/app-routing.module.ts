import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';
import { RegistroProyectoComponent } from './registro-proyecto/registro-proyecto.component';
import { RegistroProyectoModule } from './registro-proyecto/registro-proyecto.module';
import { RegistroParticipantesComponent } from './registro-participantes/registro-participantes.component';
import { RegistroParticipantesModule } from './registro-participantes/registro-participantes.module';


const routes: Routes = [
  { path: 'login', component: LoginComponent }
  , { path: '', component: LoginComponent , pathMatch: 'full' }
  ,{ path: 'registro-proyecto', component: RegistroProyectoComponent, pathMatch: 'full'}
  ,{path: 'registro-participantes', component: RegistroParticipantesComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule, RegistroProyectoModule, RegistroParticipantesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
