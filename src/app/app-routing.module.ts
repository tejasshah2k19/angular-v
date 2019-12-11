import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path:"abc/mpfl",component:MyprofileComponent},
  {path:"home",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"users",component:ListUsersComponent},
  {path:"userdetail/:userId",component:UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
