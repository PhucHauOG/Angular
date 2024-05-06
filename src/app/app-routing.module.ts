import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { FeaturedGameComponent } from './page/featured-game/featured-game.component';
import { ProductComponent } from './page/product/product.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: 'signup', component: SignUpComponent },

  { path: 'fearture-game', component: FeaturedGameComponent },

  { path: 'search/searchphrase', component: ProductComponent, children:[
    {path: ':name', component: ProductComponent}
  ]},

  { path: 'product-game', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
