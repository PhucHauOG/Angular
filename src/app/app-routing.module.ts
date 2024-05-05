import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LogoutComponent } from './page/logout/logout.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { FeaturedGameComponent } from './page/featured-game/featured-game.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'logout',
    component: LogoutComponent
  },

  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'fearture-game',
    component: FeaturedGameComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
