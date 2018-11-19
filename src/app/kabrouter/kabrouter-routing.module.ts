import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PolicecontrolroomComponent } from '../policecontrolroom/policecontrolroom.component';

const routes: Routes = [
  {
    path : '/' , component : LoginComponent 
  }
,
  {
    path : '/policecontrolroom' , component : PolicecontrolroomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KabrouterRoutingModule { }
