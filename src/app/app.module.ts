import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AddComponent } from './page/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedGameComponent,
    FooterComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterHeadingComponent,
    FormsModule,
    ReactiveFormsModule,
    AdminComponent,
    MatToolbarModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['https://localhost:7080']
      }
    }),
    MatTableModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    AddComponent
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
