import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserRegisterComponent} from "./component/user-register/user-register.component";


const routes: Routes = [  {path: '', redirectTo: '/user-register', pathMatch: 'full'},
  {path: 'user-register', component: UserRegisterComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [UserRegisterComponent];
