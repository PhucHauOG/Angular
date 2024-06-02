import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page/page-component/header/header.component';
import { FeaturedGameComponent } from './page/featured-game/featured-game.component';
import { FooterComponent } from './page/page-component/footer/footer.component';
import { FooterHeadingComponent } from './page/page-component/footer-heading/footer-heading.component';
import { ProductComponent } from './page/product/product.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './service/auth-service/auth.service';
import { AuthGuardService } from './service/auth-guard/auth-guard.service';
import { AdminComponent } from './page/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedGameComponent,
    FooterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterHeadingComponent,
    FormsModule,
    ReactiveFormsModule,
    AdminComponent,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['https://localhost:7080']
      }
    })
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
