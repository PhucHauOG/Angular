import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { FeaturedGameComponent } from './page/featured-game/featured-game.component';
import { ProductComponent } from './page/product/product.component';
import { AuthGuardService } from './service/auth-guard/auth-guard.service';
import { AdminComponent } from './page/admin/admin.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: '', component: FeaturedGameComponent, canActivate: [AuthGuardService] },

  { path: 'signup', component: SignUpComponent },

  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService], data: { role: ['Admin'] }},

  { path: 'fearture-game', component: FeaturedGameComponent },

  { path: 'search/', component: ProductComponent, children:[
    {path: ':name', component: ProductComponent}
  ]},

  { path: 'product-game', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
